import { askAssistant } from "@/app/utils/openai";
import { NextRequest, NextResponse } from "next/server";

type AssistantResponse = {
    response: string,
}

export async function POST(req: NextRequest) {
    const request = await req.json();
    const response = await askAssistant(request.threadId, request.question);
   return NextResponse.json({response: response});
  }