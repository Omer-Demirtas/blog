import Post, { PostLink } from "@/types/post";
import Link from "next/link";
import TypographyH1 from "../common/TypographyH1";
import TypographyH2 from "../common/TypographyH2";

const PostLinkElement = ({ postLink } : { postLink: PostLink }) => {
    const title: String = postLink?.title;

    return ( 
        <Link href={`/posts/${postLink.path.join('/')}`}>
            {
                postLink.path.length === 1 ? (
                    <TypographyH1>{title}</TypographyH1>
                ) : (
                    <TypographyH2>{title}</TypographyH2>
                )
            }
        </Link>
    );
}
 
export default PostLinkElement;