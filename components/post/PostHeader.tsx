import Post from "@/types/post";
import TypographyH1 from "../common/TypographyH1";

const PostHeader = ({ post } : { post: Post }) => {
    return ( 
        <TypographyH1>{post.title}</TypographyH1>
    );
}
 
export default PostHeader;