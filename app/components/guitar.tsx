/* eslint-disable @typescript-eslint/no-unused-vars */
import { Link } from '@remix-run/react';
import { IAtributtesStrappi } from '~/entities/guitar.entity';

const Guitar = ({ guitar }: { guitar: IAtributtesStrappi }) => {

    const { description, image, price, url, guitar_name } = guitar;
    const { url: image_url } = image?.data?.attributes?.formats?.small || '';

    return (
        <div className="guitarra">
            <img src={image_url} alt={`img of guitar ${url}`} />
            <div className="contenido">
                <h3>{guitar_name}</h3>
                <p className='description'>{description[0]?.children[0]?.text}</p>
                <p className='price'>$ {price} </p>

                <Link className='link' to={`/guitars/${url}`.trim()}>go to guitar page</Link>
            </div>
        </div>
    )
}

export default Guitar;
