/* eslint-disable @typescript-eslint/ban-types */
import { IApiResponse } from "~/entities/response-strappi.entitys";
export type ICourseEntity = {};

const __url: string | undefined = process.env.API_URL_SERVICES;

const _url_course = (): string => {
    const result = '/course?';
    return `${result}populate=image`;
}

export async function get_courrse(): Promise<IApiResponse<ICourseEntity>> {
    const url = `${__url}${_url_course()}`;
    const response = await fetch(url);
    return response.json();
}