import serverPath from '@/app/utils/path';
import fs from 'fs';
import { NextResponse } from 'next/server';
export default async function GET(params:{fileId: string}) {
var response : NextResponse<unknown> | undefined; 
await fs.readFile(serverPath(`public/ai_images/${params.fileId}.png`), (err, data) => {
    if(err === null) {
    const hdr = new Headers();
        hdr.set('Content-Type', 'image/png');
        response = new NextResponse(data, {headers: hdr})
    }
})
if (response === null) {
    response = new NextResponse();
}
return response;
}
