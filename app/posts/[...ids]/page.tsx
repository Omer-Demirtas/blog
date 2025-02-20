import TagGroup from "@/components/common/TagsGroup";
import PostAboutSection from "@/components/post/PostAboutSection";
import PostBody from "@/components/post/PostBody";
import PostBreadcrumb from "@/components/post/PostBreadcrumb";
import PostHeader from "@/components/post/PostHeader";
import posts from "@/data/posts";
import Post, { ElementType, PostElement } from "@/types/post";
import React from "react";


export function generateStaticParams() {
    return posts.map((post) => ({
      ids: post.path,
    }));
}


const PostPage = ({ params }: { params: { ids: String[] } }) => {

    const post: Post = posts.filter(p => p.path.join('/') === params.ids.join('/'))[0];
    
    if (post == null) return <h1>Not Found</h1>

    return ( 
        <React.Fragment>
            <PostBreadcrumb paths={post.path} initPath={"/posts/"} />

            <main id="post" className="basis-auto flex flex-col gap-4 mt-4">
                <PostHeader post={post} />

                <PostAboutSection post={post} />
                
                <PostBody post={post} />
            </main>
        </React.Fragment>
    );
}
 
export default PostPage;