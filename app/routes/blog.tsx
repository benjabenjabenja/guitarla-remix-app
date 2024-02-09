import { MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import Post from "~/components/post";
import { IPostEntity } from "~/entities/posts.entitys";
import { ICollectionStrappi } from "~/entities/response-strappi.entitys";
import { get_posts } from "~/models/posts.server";
import styles from '~/styles/blog.css';

export const meta: MetaFunction = () => {
    return [
        { title: "Blog - RemixRun App" },
        { name: "description", content: "Welcome to Remix!" },
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
	const posts = await get_posts();
	if (!posts) {
		throw new Response('', {
			status: 404,
			statusText: 'Posts not found :('
		});
	}
	const { data } = posts;
	return data;
}

const Blog = () => {
	const posts = useLoaderData() as ICollectionStrappi<IPostEntity>[];
	return (
		<main className="contenido">
			<h3 className="heading"> Blog </h3>
			<div className="blog">
				{
					posts && (
						posts?.map(p => <Post key={p.id} post={p?.attributes} />)
					)
				}
			</div>
		</main>
	);
};

export default Blog;
