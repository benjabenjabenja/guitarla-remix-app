import { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
    return [
        { title: "Blog - RemixRun App" },
		{ name: "description", content: "Welcome to Remix!" },
    ];
};


const Blog = () => {
  return (
    <div>
        Blog
    </div>
  )
}

export default Blog;
