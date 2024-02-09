import { Link, useLoaderData } from "@remix-run/react";
import { IPostEntity, IPostParams } from "~/entities/posts.entitys";
import { IApiResponse } from "~/entities/response-strappi.entitys";
import { get_post_by_id } from "~/models/posts.server";
import { format_date } from "~/utils/helpers.utils";
import styles from '~/styles/blog.css';

export async function loader({ params }: { request: Request, params: IPostParams }): Promise<IApiResponse<IPostEntity>> {
    const { postId } = params;
    const response = await get_post_by_id(postId);
    if (!response) {
        throw new Response('', {
            status: 404,
            statusText: 'Post not found'
        });
    }
    return response;
}

export function meta({ data }: { data: IApiResponse<IPostEntity>}) {
    const { data: post } = data || { data: null };
    const response = data ? [
        { title: post[0]?.attributes.title + " - RemixRun App" },
        { name: "description", content: "Marketplace of guitarrs, Guitarrs, Sale Guitar" },
    ] :  [
        { title: 'ERROR - RemixRun App' },
        { name: 'description', content: 'Guitar not found' }
    ];
    return response;
}
export function links() {
    return [
        {
            rel: 'stylesheet',
            href: styles
        }
    ];
}

const PostId = () => {
    const { data } = useLoaderData() as IApiResponse<IPostEntity>;
    const { attributes } = data[0];
    const { contenido, image, title, createdAt } = attributes;
    return (
        <article className="contenedor post">
            <img className='imagen mt__5' src={image?.data?.attributes?.url} alt={`blog ${image.data.attributes.url}`} />
            <div className="contenido">
                <h3 className="heading"> { title } </h3>
                <p className="fecha">{ format_date(createdAt) }</p>
                {
                    contenido && contenido.map( (content, i) => <p key={i} className="texto">{content?.children[0].text}</p>)
                }
                <Link className="link" to="/blog"> back to blog</Link>
            </div>
        </article>
    )
}

export default PostId;
