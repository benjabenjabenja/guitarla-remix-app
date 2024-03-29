import { IGuitarEntity } from "~/entities/guitar.entity";
import { IApiResponse } from "~/entities/response-strappi.entitys";

/* eslint-disable @typescript-eslint/no-explicit-any */
const __url: string | undefined = process.env.API_URL_SERVICES;
const _url_guitars = (filter: string): string => {
    let result = '/guitarras?';
    filter && (result += `filters[url]=${filter}`);

    return `${result}${!filter ? '' : '&'}populate=image`;
}

export async function get_guitar_by_id(params: string): Promise<IApiResponse<IGuitarEntity>>{
    const url = `${__url}${_url_guitars(params)}`;
    const response = await fetch(url);
    return response.json();
}

export async function get_guitars(): Promise<IApiResponse<IGuitarEntity>>{
    const url = `${__url}${_url_guitars('')}`;
    const response = await fetch(url);
    return response.json();
}