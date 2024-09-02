import Post, { ElementType, PostElement } from "@/types/post";
import PostHeader from "./PostHeader";
import TypographyH4 from "../common/TypographyH4";
import PostLink from "./PostLink";


const createElementByType = (element: PostElement) => {
    switch (element.type) {
        case ElementType.TEXT:
            return <TypographyH4 key={`${element.id}`}>{element.content}</TypographyH4>
        case ElementType.POST:
            return <PostLink key={`${element.id}`} post={element.content as Post} />   
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