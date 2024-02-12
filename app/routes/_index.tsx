import type { MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import GuitarList from "~/components/guitar-list";
import { IGuitarEntity } from "~/entities/guitar.entity";
import { ICourseEntity } from "~/entities/course.entity";
import { IPostEntity } from "~/entities/posts.entity";
import { IApiResponse } from "~/entities/response-strappi.entitys";
import { get_guitars } from "~/models/guitars.server";
import { get_posts } from "~/models/posts.server";
import { get_courrse } from "~/models/course.server";
import stylesGuitars from '~/styles/guitar.css';
import stylesBlog from '~/styles/blog.css'
import PostList from "~/components/post-list";

export const meta: MetaFunction = () => {
    return [
        { title: "Home - RemixRun App" },
		{ name: "description", content: "Welcome to Remix!" },
    ];
};

export function links() {
    return [
        {
            rel: 'stylesheet',
            href: stylesGuitars
        },
        {
            rel: 'stylesheet',
            href: stylesBlog
        }
    ]
}

export async function loader() {
    const [guitars, posts, course] = await Promise.all([get_guitars(), get_posts(), get_courrse()]);
    return { guitars, posts, course };
}

export default function Index() {
    const { guitars, posts, course } = useLoaderData() as { guitars: IApiResponse<IGuitarEntity>, posts: IApiResponse<IPostEntity>, course: IApiResponse<ICourseEntity> };
    console.log({ course });
    return (
    <>
        <main className="contenedor">
            <GuitarList guitars={guitars} />
            <PostList posts={posts} />   
        </main>    
    </>
    );
}
