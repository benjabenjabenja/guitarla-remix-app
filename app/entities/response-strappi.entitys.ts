export type IApiResponse<T> = {
    data: ICollectionStrappi<T> | ICollectionStrappi<T>[];
    meta: IStrappiPagination;
};
export type IApiSingleResponse<T> = {
    data: ICollectionStrappi<T>;
    meta: never;
}
export type IStrappiPagination = {
    pagination: {
        page: number;
        pageCount: number;
        pageSize: number;
        total: number;
    };
}
export type ICollectionStrappi<T> = {
    attributes: T;
    id: number;
}
export type IStrappiChildren = {
    type: string,
    text: string
}
export type IStrappiContent = {
    children: IStrappiChildren[],
    type: string;
}
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
export type IFormatImageStrappi = { [key in 'small' | 'medium' | 'thumbnail']: ITypeImageStrappi; };
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
    data: ICollectionStrappi<IAtributtesImageStrappi>
};