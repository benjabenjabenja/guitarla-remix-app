import { Link } from '@remix-run/react';
import { IPostEntity } from '~/entities/posts.entitys';
import { format_date } from '~/utils/helpers.utils';

const Post = ({ post }: { post: IPostEntity }) => {
    const { contenido, image, title, publishedAt, url } = post;
    const content = contenido[0]; 
    return (
        <article className='post'>
            <img className='imagen' src={image?.data?.attributes?.formats?.small?.url} alt={`blog ${image.data.attributes.url}`} />
            <div className="contenido">
                <h3 className="heading"> { title } </h3>
                <p className="fecha">{ format_date(publishedAt) }</p>
                <p className="resumen">{content?.children[0].text}</p>
                <Link className='link' to={`/posts/${url}`}> read more...  </Link>
            </div>
        </article>
    )
}

export default Post;
