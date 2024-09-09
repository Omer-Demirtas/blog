import Post, { ElementType, PostElement, PostLink } from "@/types/post";
import PostHeader from "./PostHeader";
import TypographyH4 from "../common/TypographyH4";
import PostLinkElement from "./PostLinkElement";


const createElementByType = (element: PostElement) => {
    switch (element.type) {
        case ElementType.TEXT:
            return <TypographyH4 key={`${element.id}`}>{element.content.toString()}</TypographyH4>
        case ElementType.POST:
            return <PostLinkElement key={`${element.id}`} postLink={element.content as PostLink} />   
        default:
            return <h1>Error</h1>
    }
}

const createContent = (post: Post) => {
    return post.content.map(element => createElementByType(element));
};

const PostBody = ({ post } : { post : Post }) => {
    return createContent(post);
}
 
export default PostBody;