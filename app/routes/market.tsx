import { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
    return [
        { title: "Market - RemixRun App" },
        { name: "description", content: "Welcome to Remix!" },
    ];
};

function Market() {
    return <div>Market</div>;
}

export default Market;
