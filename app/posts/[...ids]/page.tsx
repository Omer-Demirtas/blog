import PostBreadcrumb from "@/components/post/PostBreadcrumb";
import posts from "@/data/posts";
import Post from "@/types/post";


const PostPage = ({ params }: { params: { ids: String[] } }) => {
    
    const postName = params.ids[params.ids.length - 1];

    const post: Post = posts.filter(p => p.title.replaceAll(' ', '-').toLowerCase() === postName)[0];
    console.log({post});
    
    return ( 
        <div>
            <PostBreadcrumb data={post.path} />
            <h1>{post.title}</h1>
        </div>
    );
}
 
export default PostPage;