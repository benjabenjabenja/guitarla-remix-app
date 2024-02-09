import { IPostEntity } from "~/entities/posts.entitys";
import { IApiResponse } from "~/entities/response-strappi.entitys";

const __url: string | undefined = process.env.API_URL_SERVICES;

const _url_posts = (filter: string): string => {
    let result = '/posts?';
    filter && (result += `filters[url]=${filter}`);

    return `${result}${!filter ? '' : '&'}populate=image`;
}

export async function get_post_by_id(params:string): Promise<IApiResponse<IPostEntity>> {
    const url: string = `${__url}${_url_posts(params)}`;
    const response = await fetch(url);
    return response.json();
}
export async function get_posts(): Promise<IApiResponse<IPostEntity[]>> {
    const url: string = `${__url}${_url_posts('')}`;
    const response = await fetch(url);
    return response.json();
}