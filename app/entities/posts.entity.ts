import { IImageStrappi, IStrappiContent } from "./response-strappi.entitys";
export type IPostParams = {
    postId: string;
}
export type IPostEntity = {
    contenido: IStrappiContent[];
    createdAt: string;
    image: IImageStrappi;
    publishedAt: string;
    title: string;
    updatedAt: string;
    url: string;
}