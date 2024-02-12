/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link, useLoaderData, useOutletContext } from "@remix-run/react";
import { useState } from 'react';
import { IGuitarEntity, IGuitarParams } from "~/entities/guitar.entity";
import { ICollectionStrappi } from "~/entities/response-strappi.entitys";
import { ICartStore } from "~/entities/store.entity";
import { get_guitar_by_id } from "~/models/guitars.server";
import styles from '~/styles/guitar.css';

export async function loader({ params }: { request: Request, params: IGuitarParams }): Promise<ICollectionStrappi<IGuitarEntity>> {
    
    const { guitarId } = params;
    const { data } = await get_guitar_by_id(guitarId);
    if (!(data?.length > 0)) {
        throw new Response('',{
            status: 404,
            statusText: 'Guitar not found'
        });
    }
    return data[0];
}

export function links() {
    return [
        {
            rel: 'stylesheet',
            href: styles
        }
    ];
}

export function meta({ data }: { data: ICollectionStrappi<IGuitarEntity>}) {
    const { attributes } = data || { attributes: null };
    const response = data ? [
        { title: attributes?.guitar_name + " - RemixRun App" },
        { name: "description", content: "Marketplace of guitarrs, Guitarrs, Sale Guitar" },
    ] :  [
        { title: 'ERROR - RemixRun App' },
        { name: 'description', content: 'Guitar not found' }
    ];
    return response;
}

function GuitarId() {

    const [count, setCount] = useState(0);
    const { addToCart } = useOutletContext() as { addToCart: (item: ICartStore) => void };
    const { attributes } = useLoaderData() as { attributes: IGuitarEntity, id: number };
    const { description, image, guitar_name, price, url } = attributes;
    const { url: image_url } = image?.data?.attributes?.formats?.small || '';

    const handleSubmit = (ev: { preventDefault: () => void; }) => {
        ev.preventDefault();
        if (count <= 0) {
            return;
        }
        const obj = {
            image_url,
            guitar_name,
            t_price: price * count,
            p_uni: price,
            count,
            url
        }
        addToCart(obj);
    }

    return (
        <>
            {
                Object.keys(attributes || {})?.length && <main className="contenido guitarra">
                    
                    <img className="imagen" src={image_url} alt={"guitarra " + guitar_name} />

                    <div className="contenido">
                        <h3>{guitar_name}</h3>

                        <p className="texto">{description[0]?.children[0]?.text}</p>
                        <p className="price">$ {price}</p>

                        <form onSubmit={handleSubmit} className="formulario">
                            <label htmlFor="add-to-cart">count: </label>
                            <select value={count} onChange={(ev) => setCount(+ev?.target?.value)} name="add-to-cart" id="add-to-cart">
                                <option value="">-- Select --</option>
                                {
                                    [1, 2, 3, 4, 5].map((v,i) => (<option  key={i} value={v}>{v}</option>))
                                }
                            </select>
                            <input type="submit" value={"Add to cart"} />
                        </form>
                    </div>
                </main>
            }
            <Link to={"/market"}> back to market </Link>
        </>
    )
}

export default GuitarId;