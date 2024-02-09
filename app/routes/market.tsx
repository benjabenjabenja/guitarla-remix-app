import { MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import Guitar from "~/components/guitar";
import { IGuitar } from "~/entities/guitar.entity";
import { get_guitars } from "~/models/guitars.server";
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
    const { data } = await get_guitars() || [];
    return data;
}

function Market() {
    const guitars: IGuitar[] = useLoaderData();
    return (
        <main className="contenedor">
            <h2 className="heading">~~ Our Stock ~~</h2>
            {
                guitars?.length && (
                    <div className="guitarras-grid">
                        {guitars.map( g => (<Guitar guitar={g.attributes} key={g.attributes.url} />))}
                    </div>
                )
            }
        </main>
    );
}

export default Market;
