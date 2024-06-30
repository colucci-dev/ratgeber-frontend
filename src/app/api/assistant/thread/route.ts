import { createThread } from "@/app/utils/openai";
import { NextRequest, NextResponse } from "next/server";


export async function GET(req: NextRequest) {
    const threadId = await createThread();
    return NextResponse.json({threadId: threadId});
  }