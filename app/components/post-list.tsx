import { IApiResponse } from "~/entities/response-strappi.entitys";
import Post from "./post";
import { IPostEntity } from "~/entities/posts.entity";

function PostList({ posts }: { posts: IApiResponse<IPostEntity> }) {
    return (
        <>
            <h3 className="heading"> Blog </h3>
			<div className="blog">
				{
					posts?.data?.length && (
						posts?.data?.map(p => <Post key={p.id} post={p?.attributes} />)
					)
				}
			</div>
        </>
    )
}

export default PostList;
