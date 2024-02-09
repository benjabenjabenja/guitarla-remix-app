import { IImageStrappi, IStrappiContent } from "./response-strappi.entitys";
export type IGuitarParams = { guitarId: string };
export type IGuitarModel = {
    createdAt: string;
    description: IStrappiContent[];
    guitar_name: string;
    image: IImageStrappi;
    price:number;
    publishedAt:string;
    updatedAt:string;
    url: string;
}
