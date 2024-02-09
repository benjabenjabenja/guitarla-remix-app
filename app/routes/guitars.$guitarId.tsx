import { useLoaderData } from "@remix-run/react";
import { IGuitarModel, IGuitarParams } from "~/entities/guitar.entity";
import { ICollectionStrappi } from "~/entities/response-strappi.entitys";
import { get_guitar_by_id } from "~/models/guitars.server";
import styles from '~/styles/guitar.css';

export async function loader({ params }: { request: Request, params: IGuitarParams }): Promise<ICollectionStrappi<IGuitarModel>> {
    
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

export function meta({ data }: { data: ICollectionStrappi<IGuitarModel>}) {
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

    const { attributes } = useLoaderData() as { attributes: IGuitarModel, id: number };
    const { description, image, guitar_name, price } = attributes;
    const { url: image_url } = image?.data?.attributes?.formats?.small || '';

    return (
        <>
            {
                Object.keys(attributes || {})?.length && <main className="contenido guitarra">
                    <img className="imagen" src={image_url} alt={"guitarra " + guitar_name} />
                    <div className="contenido">
                        <h3>{guitar_name}</h3>
                        <p className="texto">{description[0]?.children[0]?.text}</p>
                        <p className="price">$ {price}</p>
                    </div>
                </main>
            }
        </>
    )
}

export default GuitarId;