export type ITypeImageStrappi = {
    ext: string;
    url: string;
    hash: string;
    mime: string;
    name: string;
    path: null;
    size: number;
    width: number;
    height: number;
    provider_metadata: {
        public_id: string;
        resource_type: string;
    }
};
export type IFormatImageStrappi = {
    [key in 'small' | 'medium' | 'thumbnail']: ITypeImageStrappi;
};
export type IAtributtesImageStrappi = {
    guitar_name: string;
    alternativeText: null;
    caption: null;
    width: number;
    height: number;
    formats: IFormatImageStrappi;
    ext: string;
    mime: string;
    hash: string;
    size: number;
    url: string;
    previewUrl: null;
    provider: string;
    provider_metadata: {
        public_id: string;
        resource_type: string;
    },
    createdAt: string;
    updatedAt: string;
};
export type IImageStrappi = {
    data: {
        id: number;
        attributes: IAtributtesImageStrappi;
    }
};
export type IChildrenDescriptionAttributesStrappi = {
    text: string;
    type: string;
}
export type IDescriptionAttributesStrappi = {
    children: IChildrenDescriptionAttributesStrappi[];
    type: string;
}
export type IAtributtesStrappi = {
    createdAt: string;
    description: IDescriptionAttributesStrappi[];
    guitar_name:string;
    image: IImageStrappi;
    price:345
    publishedAt:string;
    updatedAt:string;
    url:string;
}
export type IGuitar = { attributes: IAtributtesStrappi, id: number };