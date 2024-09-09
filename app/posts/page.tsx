import TypographyH1 from "@/components/common/TypographyH1";
import PostLink from "@/components/post/PostLinkElement";
import posts from "@/data/posts";

const PostHomePage = () => {
    return ( 
        <div>
            <TypographyH1>All Posts</TypographyH1>
            {
                posts.map(post => (
                    <PostLink key={`${post.id}`} postLink={post} />
                ))
            }
        </div>
    );
}
 
export default PostHomePage;