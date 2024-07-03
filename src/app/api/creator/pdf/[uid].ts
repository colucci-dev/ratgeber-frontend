import serverPath from '@/app/utils/path';
import fs from 'fs';
import { NextResponse } from 'next/server';
export default async function GET(params:{uid: string}) {
var response : NextResponse<unknown> | undefined; 
await fs.readFile(serverPath(`public/creator_pdfs/${params.uid}.pdf`), (err, data) => {
    if(err === null) {
    const hdr = new Headers();
        hdr.set('Content-Type', 'application/pdf');
        response = new NextResponse(data, {headers: hdr})
    }
})
if (response === null) {
    response = new NextResponse();
}
return response;
}
