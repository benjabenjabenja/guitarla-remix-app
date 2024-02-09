/* eslint-disable @typescript-eslint/no-explicit-any */
const __url: string | undefined = process.env.API_URL_SERVICES;

export async function get_guitars(): Promise<{data: any[], meta: any}>{
    const url = `${__url}/guitarras?populate=image`;
    const response = await fetch(url);
    return response.json();
}