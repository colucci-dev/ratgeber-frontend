import { BusinessCardData } from "@/app/classes/businesscard";
import serverPath from "@/app/utils/path";
import { randomUUID } from "crypto";
import { NextRequest, NextResponse } from "next/server";
import puppeteer from "puppeteer";
import fs from 'fs';

export async function POST(req: NextRequest) {

    const request : BusinessCardData = await req.json();
    const browser = await puppeteer.launch({
        headless: true
    });
    const page = await browser.newPage();
    await page.setRequestInterception(true);

    // Request intercept handler... will be triggered with 
    // each page.goto() statement

    page.on('request', interceptedRequest => {

        // Here, is where you change the request method and 
        // add your post data
        if (interceptedRequest.url().endsWith('/api/creator/document')) {
            var data = {
                'method': 'POST',
                'postData': JSON.stringify(request),
            };
            interceptedRequest.continue(data);
        }
        else {
            interceptedRequest.continue();
        }
    });
    await page.goto(`${process.env.NEXT_API}/api/creator/document`,
    {waitUntil: 'domcontentloaded'});
    const pdf = await page.pdf({format: 'a6'});
    const uuid = randomUUID();
    const filePath = serverPath(`public/creator_pdfs/${uuid}.pdf`);
    if (!fs.existsSync(filePath)) {                
        console.log(`Pfad: ${filePath}`);
        fs.appendFile(filePath, pdf, (err) => { if (err) {console.error(err);}});
    }
    await browser.close();
    return NextResponse.json({response: uuid});
  }