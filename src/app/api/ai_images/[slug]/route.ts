import serverPath from '@/app/utils/path';
import fs from 'fs';
import { NextRequest, NextResponse } from 'next/server';
export async function GET(req: NextRequest,{ params }: { params: { slug: string } }) {
    let path = serverPath(`public/ai_images/${params.slug}.png`);
    if (fs.existsSync(path)) {
    const data = fs.readFileSync(path);
    return new NextResponse(data, {headers: {'Content-Type': 'image/png'}});
    } else {
        return new NextResponse(null, {status: 500});
    }
}
