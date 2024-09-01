import posts from "@/data/posts";
import Post from "@/types/post";
import Link from "next/link";

const PostCard = ({ post } : { post: Post}) => {
    return ( 
        <Link href={`/posts/${post.title.replaceAll(' ', '-').toLowerCase()}`}>
            <h1>{post.title}</h1>
        </Link>
    );
}

const PostHomePage = () => {
    return ( 
        <div>
            <h1>All Posts</h1>
            {
                posts.map(post => (
                    <PostCard key={`${post.id}`} post={post} />
                ))
            }
        </div>
    );
}
 
export default PostHomePage;