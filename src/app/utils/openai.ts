import OpenAI from "openai";
import fs from 'fs';
import serverPath from "./path";

export async function askAssistant(threadId: string, question: string) {
    const openai = new OpenAI({apiKey: process.env.OPENAI_TOKEN});
    const assistant = await openai.beta.assistants.retrieve(process.env.ASSISTANT_ID!);
    const message = await openai.beta.threads.messages.create(
        threadId,
        {
            role: "user",
            content: question,
        }
    );
    const run = await openai.beta.threads.runs.createAndPoll(
        threadId,
        {
            assistant_id: process.env.ASSISTANT_ID!,
        }
    )
    if (run.status === 'completed') {
        const messages = await openai.beta.threads.messages.list(run.thread_id);
        var output = "";
        for (const message of messages.data.reverse()) {
            switch(message.content[0].type) {
            case 'text':
                output += `${message.role == 'user' ? "**Sie" : "**Karl"} >** ${(message.content[0] as any).text.value.replace(/.\d+†source./g, '')} \r\n\r\n `;
                break;
            case 'image_url':
                output += `${message.role == 'user' ? "** Sie" : "**Karl"} >** ${(message.content[0] as any).image_url.value}`;
                break;
            case 'image_file':
                const fileId = (message.content[0] as any).image_file.file_id;
                const filePath = serverPath(`public/ai_images/${fileId}.png`);
                if (!fs.existsSync(filePath)) {                
                    const file = await openai.files.content(fileId);
                    console.log(`Pfad: ${filePath}`);
                    fs.appendFile(filePath, new Uint8Array(await new Response(file.body!).arrayBuffer()), (err) => { if (err) {console.error(err);}});
                }
                output += `**Karl >** ![Generiertes Bild](/api/ai_images/${fileId})`;
                break;
            }
        }
        return output;
    }
    return "Etwas ist schiefgelaufen.";
}

export async function createThread() {
    const openai = new OpenAI({apiKey: process.env.OPENAI_TOKEN});
    const thread = await openai.beta.threads.create();
    return thread.id;
}
