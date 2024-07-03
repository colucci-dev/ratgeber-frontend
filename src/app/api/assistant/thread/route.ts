import { createThread } from "@/app/utils/openai";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = 'force-dynamic' // defaults to auto

export async function GET(req: NextRequest) {
    const threadId = await createThread();
    return NextResponse.json({threadId: threadId});
  }