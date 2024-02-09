// import { cssBundleHref } from "@remix-run/css-bundle";
import styles from './styles/index.css';
import type { LinksFunction } from "@remix-run/node";
import {
    Links,
    LiveReload,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
} from "@remix-run/react";

import Header from '~/components/header';
import Footer from '~/components/footer';

export const links: LinksFunction = () => [
	...(styles ? [
		{ rel: "preconect", href: "https://fonts.googleapis.com" },
		{ rel: "preconect", href: "https://fonts.gstatic.com" },
		{ rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap" },
		{ rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" },
		{ rel: "stylesheet", href: styles },
	] : []),
];

export default function App() {
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
                <Outlet />
				<Footer />
                <ScrollRestoration />
                <Scripts />
				<LiveReload />
            </body>
        </html>
    );
}
