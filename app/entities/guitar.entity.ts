import { IImageStrappi, IStrappiContent } from "./response-strappi.entitys";

export type IGuitarParams = { guitarId: string };
export type IGuitarEntity = {
    createdAt: string;
    description: IStrappiContent[];
    guitar_name: string;
    image: IImageStrappi;
    price:number;
    publishedAt:string;
    updatedAt:string;
    url: string;
}
