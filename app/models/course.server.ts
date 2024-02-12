/* eslint-disable @typescript-eslint/ban-types */
import { ICourseEntity } from "~/entities/course.entity";
import { IApiResponse } from "~/entities/response-strappi.entitys";

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