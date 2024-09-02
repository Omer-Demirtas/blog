import TypographyH1 from "@/components/common/TypographyH1";
import TypographyH4 from "@/components/common/TypographyH4";
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
                return <ElementContainer key={`${element.id}`}><TypographyH4>{element.content}</TypographyH4></ElementContainer>
            case ElementType.POST:
                return <ElementContainer key={`${element.id}`}><PostLink post={element.content as Post} /></ElementContainer>   
            default:
                return <h1>Error</h1>
        }
    }
    
    const createContent = (post: Post) => {
        return post.content.map(element => createElementByType(element));
    };

    const post: Post = posts.filter(p => p.path.join('/') === params.ids.join('/'))[0];
    
    if (post == null) return <h1>Not Found</h1>

    return ( 
        <div>
            <PostBreadcrumb paths={post.path} initPath={"/posts/"} />
            <TypographyH1>{post.title}</TypographyH1>
            <div>
                {createContent(post)}
            </div>
        </div>
    );
}
 
export default PostPage;