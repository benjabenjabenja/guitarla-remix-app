export type IStore = {
    cart: ICartStore
}
export type ICartStore = {
    image_url: string,
    guitar_name: string;
    t_price: number;
    p_uni: number;
    count: number;
    url: string;
}
export type ISetStore = (store: IStore) => void;