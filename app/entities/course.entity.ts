import { IImageStrappi, IStrappiContent } from "./response-strappi.entitys";

export type ICourseEntity = {
    title: string;
    contenido: IStrappiContent[];
    createdAt: string;
    updatedAt: string;
    publichedAt: string;
    image: IImageStrappi;
};