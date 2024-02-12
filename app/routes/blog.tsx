import { MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import PostList from "~/components/post-list";
import { IPostEntity } from "~/entities/posts.entity";
import { IApiResponse } from "~/entities/response-strappi.entitys";
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
	
	return posts;
}

const Blog = () => {
	const posts = useLoaderData() as IApiResponse<IPostEntity>;
	return (
		<main className="contenido">
			<PostList posts={posts} />
		</main>
	);
};

export default Blog;
