import { MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { get_guitars } from "~/models/guitars.server";
import { IApiResponse } from "~/entities/response-strappi.entitys";
import { IGuitarModel } from "~/entities/guitar.entity";
import GuitarList from "~/components/guitar-list";
import styles from '../styles/guitar.css';

export const meta: MetaFunction = () => {
    return [
        { title: "Market - RemixRun App" },
        { name: "description", content: "Marketplace of guitarrs, Guitarrs, Sale Guitar" },
    ];
};
export function links() {
    return [
        {
            rel: 'stylesheet',
            href: styles
        }
    ]
}
export async function loader() {
    const response = await get_guitars();
    return response;
}

function Market() {
    const guitars = useLoaderData() as  IApiResponse<IGuitarModel>;
    return (
        <main className="contenedor">
            <GuitarList guitars={guitars}/>
        </main>
    );
}

export default Market;
