import type { MetaFunction } from "@remix-run/node";


export const meta: MetaFunction = () => {
    return [
        { title: "Home - RemixRun App" },
		{ name: "description", content: "Welcome to Remix!" },
    ];
};

export default function Index() {
    return (
        <main className="contenedor">
            <h1> Desde Remix </h1>
        </main>
    );
}
