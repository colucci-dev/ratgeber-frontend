import { BusinessCardData } from "../classes/businesscard";
import { CampaignData } from "../classes/campaign";

export async function fetchAPI(endpoint: string) {
    const headers = new Headers();
    headers.set('Authorization', `Bearer ${process.env.API_TOKEN}`)
    //next revalidate: Cache wird nach 300 Sekunden (5 minuten) aktualisiert
    const options = { method: 'GET', headers: headers, next: { revalidate: 0}};
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
    //next revalidate: Cache wird nach 300 Sekunden (5 minuten) aktualisiert
    const options = { method: 'POST', body: JSON.stringify(data) };
    const response = await fetch(`/api/creator`, options);
    if(!response.ok) {
        throw await response.json();
    }
    return await response.json();
}

export async function postCampaign(data: CampaignData) {
    const headers = new Headers();
    const options = {method: 'POST', body: JSON.stringify(data), next: {revalidate: 0}};
    const response = await fetch(`/api/campaign`, options);
    return response.ok;
}