import { BusinessCardData } from "../classes/businesscard";

export async function fetchAPI(endpoint: string) {
    const headers = new Headers();
    headers.set('Authorization', `Bearer ${process.env.API_TOKEN}`)
    //next revalidate: Cache wird nach 300 Sekunden (5 minuten) aktualisiert
    const options = { method: 'GET', headers: headers, next: { revalidate: 300}};
    const response = await fetch(`${process.env.API_URL}/api/${endpoint}`, options);
    if(!response.ok) {
        throw await response.json();
    }
    return await response.json();
}

export async function fetchAssistant(question: string, threadId: string) {
    const headers = new Headers();
    headers.set('Content-Type', 'application/json');
    const options = {method: 'POST', headers: headers, body: JSON.stringify({question: question, threadId: threadId})};
    
    const response = await fetch(`/api/assistant`, options);
    if(!response.ok) {
        throw Error("Unexpected error!")
    }
    return (await response.json() as any).response;
}


export async function fetchThread() {
    const options = {method: 'GET'};
    
    const response = await fetch(`/api/assistant/thread`, options);
    if(!response.ok) {
        throw Error("Unexpected error!")
    }
    return (await response.json() as any).threadId;
}

export async function fetchVisitenkarte(data: BusinessCardData) {
    const headers = new Headers();
    //next revalidate: Cache wird nach 300 Sekunden (5 minuten) aktualisiert
    const options = { method: 'POST', body: JSON.stringify(data) };
    const response = await fetch(`${process.env.NEXT_API}/api/creator`, options);
    if(!response.ok) {
        throw await response.json();
    }
    return await response.json();
}