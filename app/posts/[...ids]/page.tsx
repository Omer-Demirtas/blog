import TagGroup from "@/components/common/TagsGroup";
import PostBody from "@/components/post/PostBody";
import PostBreadcrumb from "@/components/post/PostBreadcrumb";
import PostHeader from "@/components/post/PostHeader";
import posts from "@/data/posts";
import Post, { ElementType, PostElement } from "@/types/post";
import React from "react";

const PostPage = ({ params }: { params: { ids: String[] } }) => {

    const post: Post = posts.filter(p => p.path.join('/') === params.ids.join('/'))[0];
    
    if (post == null) return <h1>Not Found</h1>

    return ( 
        <div className="flex flex-col gap-4">
            <PostBreadcrumb paths={post.path} initPath={"/posts/"} />

            <TagGroup  tags={[{id: '1', name: 'java', color: 'green' }]} />

            <main id="post" className="basis-auto flex flex-col gap-4">
                <PostHeader post={post} />
                
                <PostBody post={post} />
            </main>
        </div>
    );
}
 
export default PostPage;