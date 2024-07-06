import { CampaignData } from "@/app/classes/campaign";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const request = await req.json() as CampaignData;
    const headers = new Headers();
    headers.set('Authorization', `Bearer ${process.env.API_TOKEN}`)
    headers.set('Content-Type', 'application/json');

    const options = {method: 'POST', headers: headers, body: JSON.stringify({data: request}), next: {revalidate: 0}};
    const response = await fetch(`${process.env.API_URL}/api/campaigns`, options);
    console.log(await response.json())
    if (!response.ok) {
        return new NextResponse(null, {status: 500});
    }
   return new NextResponse(null, {status: 200});
}