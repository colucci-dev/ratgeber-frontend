export async function fetchAPI(endpoint: string) {
    const headers = new Headers();
    headers.set('Authorization', `Bearer ${process.env.API_TOKEN}`)
    //next revalidate: Cache wird nach 300 Sekunden (5 minuten) aktualisiert
    const options = { method: 'GET', headers: headers, next: { revalidate: 300}};
    const response = await fetch(`${process.env.API_URL}/${endpoint}`, options);
    if(!response.ok) {
        throw Error("Unexpected error!")
    }
    return await response.json();
}