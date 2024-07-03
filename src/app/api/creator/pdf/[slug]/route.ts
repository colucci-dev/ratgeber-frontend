import serverPath from '@/app/utils/path';
import fs from 'fs';
import { NextApiRequest } from 'next';
import { NextRequest, NextResponse } from 'next/server';
export async function GET(req: NextRequest,{ params }: { params: { slug: string } }) {
    let path = serverPath(`public/creator_pdfs/${params.slug}.pdf`);
if (fs.existsSync(path)) {
const data = fs.readFileSync(path);
return new NextResponse(data, {headers: {'Content-Type': 'application/pdf'}});
} else {
    return new NextResponse(null, {status: 500});
}
}
