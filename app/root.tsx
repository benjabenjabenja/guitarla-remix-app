/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { cssBundleHref } from "@remix-run/css-bundle";
import styles from './styles/index.css';
import type { LinksFunction } from "@remix-run/node";
import {
    Link,
    Links,
    LiveReload,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
    useRouteError
} from "@remix-run/react";

import Header from '~/components/header';
import Footer from '~/components/footer';
import { useEffect, useState } from "react";
import { isValidObject } from "./utils/helpers.utils";
import { ICartStore, IStore } from "./entities/store.entity";

export type IErrorRemix = {
    status: number;
    statusText: string;
    internal: false;
    data: string;
}

export const links: LinksFunction = () => [
	...(cssBundleHref || styles ? [
		{ rel: "preconect", href: "https://fonts.googleapis.com" },
		{ rel: "preconect", href: "https://fonts.gstatic.com" },
		{ rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap" },
		{ rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" },
		{ rel: "stylesheet", href: styles },
	] || cssBundleHref : []),
];

export function Document({ children }: React.ComponentProps<any>) {
    return (
        <html lang="es-AR">
            <head>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <Meta />
                <Links />
            </head>
            <body>
                <Header />
                {children}
                <Footer />
                <ScrollRestoration />
                <Scripts />
                <LiveReload />
            </body>
        </html>
    )
}

export default function App() {
    const [store, setStore] = useState({} as IStore);
    const [cart, setCart] = useState<ICartStore[]>([]);
    const load_data = (): void => {
        const storage = localStorage.getItem("store");
        const store: IStore = JSON.parse( storage || "{}");
        isValidObject(store) && setStore(store);
        isValidObject(store?.cart) && setCart(store?.cart || []);
    }
    useEffect(
        () => load_data(), []
    );
    useEffect(
        () => {
            setStore({ ...store, cart });
        }, [cart]
    );
    useEffect(
        () => {
            localStorage.setItem("store", JSON.stringify(store));
        }, [store]
    );

    const addToCart = (cartItem: ICartStore): void => {
        if (isValidObject(cartItem)) {
            const valid = cart.some(v => v?.url === cartItem?.url);
            if (!valid) {
                setCart([...cart, cartItem]);
            } else {
                const confirmation = confirm(`Seguro dese updatear los datos de ${cartItem.guitar_name}?`);
                confirmation && setCart(cart.map(item => {
                    if (item.url === cartItem.url) {
                        return {
                            ...item, ...cartItem
                        };
                    }
                    return item;
                }));
            }
        }
    }
    return (
        <Document>
            <Outlet context={{
                addToCart,
                cart: store?.cart
            }} />
       </Document>
    );
}

export function ErrorBoundary() {
    const error = useRouteError() as IErrorRemix;
    return (
        <Document>
            <p className="error">{error.status} {error.statusText}</p>
            <Link to="/" className="error-link"> volver al inicio</Link>
        </Document>
    )
}