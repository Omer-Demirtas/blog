import TypographyH1 from "@/components/common/TypographyH1";
import PostBreadcrumb from "@/components/post/PostBreadcrumb";
import PostLink from "@/components/post/PostLink";
import posts from "@/data/posts";
import Post, { ElementType, PostElement } from "@/types/post";
import React from "react";

const ElementContainer = ({ children } : { children: React.ReactNode }) => {
    return (
        <div className="py-4">
            {children}
        </div>
    );
}

const PostPage = ({ params }: { params: { ids: String[] } }) => {
    
    const createElementByType = (element: PostElement) => {
        switch (element.type) {
            case ElementType.TEXT:
                return <ElementContainer key={`${element.id}`}>{element.content}</ElementContainer>
            case ElementType.POST:
                return <ElementContainer key={`${element.id}`}><PostLink post={element.content as Post} /></ElementContainer>   
            default:
                return <h1>Error</h1>
        }
    }
    
    const createContent = (post: Post) => {
        return post.content.map(element => createElementByType(element));
    };

    const postName = params.ids[params.ids.length - 1];

    const post: Post = posts.filter(p => p.path.join('/') === params.ids.join('/'))[0];
    
    if (post == null) return <h1>Not Found</h1>

    return ( 
        <div>
            <PostBreadcrumb data={post.path} />
            <TypographyH1>{post.title}</TypographyH1>
            <div>
                {createContent(post)}
            </div>
        </div>
    );
}
 
export default PostPage;