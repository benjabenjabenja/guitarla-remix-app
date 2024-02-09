import { MetaFunction } from "@remix-run/node";
import image from '../../public/img/nosotros.jpg';
import styles from '~/styles/about-us.css';

export const meta: MetaFunction = () => {
    return [
        { title: "About Us - RemixRun App" },
		{ name: "description", content: "Welcome to Remix!" },
		{ name: "description", content: "Sobre guitarras, Venta de guitarras" },
    ];
};

export function links() {
    return [
        {
            rel: 'stylesheet',
            href: styles
        },
        {
            rel: 'preload',
            href: image,
            as: 'image'
        }
    ]
}

const AboutUs = () => {
    return (
        <main className="contenedor nosotros">
            <h2 className="heading">About us</h2>
            <div className="contenido">
                <img src={image} alt="about us" />
                <div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi tempore dolore,
                        delectus atque consequuntur praesentium doloribus, neque veniam recusandae voluptates optio necessitatibus
                        voluptatum harum quam aperiam fugiat facere voluptate ducimus?
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi tempore dolore,
                        delectus atque consequuntur praesentium doloribus, neque veniam recusandae voluptates optio necessitatibus
                        voluptatum harum quam aperiam fugiat facere voluptate ducimus?
                    </p>
                </div>
            </div>

        </main>
    );
};

export default AboutUs;