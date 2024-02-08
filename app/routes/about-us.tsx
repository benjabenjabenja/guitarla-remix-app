import { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
    return [
        { title: "About Us - RemixRun App" },
		{ name: "description", content: "Welcome to Remix!" },
    ];
};

const AboutUs = () => {
    return <div>about us</div>;
};

export default AboutUs;