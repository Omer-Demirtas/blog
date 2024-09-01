import Post from "@/types/post";
import Link from "next/link";
import TypographyH1 from "../common/TypographyH1";
import TypographyH2 from "../common/TypographyH2";

const PostLink = ({ post } : { post: Post }) => {
    return ( 
        <Link href={`/posts/${post.path.join('/')}`}>
            {
                post.path.length === 1 ? (
                    <TypographyH1>{post.title}</TypographyH1>
                ) : (
                    <TypographyH2>{post.title}</TypographyH2>
                )

            }
        </Link>
    );
}
 
export default PostLink;