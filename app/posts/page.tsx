import TagGroup from "@/components/common/TagsGroup";
import posts from "@/data/posts";
import Link from "next/link";
import React from "react";

const PostHomePage = () => {
    return ( 
        <React.Fragment>
            <h1 className="text-4xl font-bold text-center mb-12">Blog Posts</h1>
            <div className="max-w-4xl mx-auto space-y-8"> {/* Center the posts and limit width */}
                {posts.map((post) => (
                    <div
                        key={post.id.toString()}
                        className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                    >
                        <Link href={`/posts/${post.path.join('/')}`}>
                            <h2 className="text-2xl font-semibold mb-2 cursor-pointer hover:text-blue-500">
                                {post.title}
                            </h2>
                        </Link>
                        <p className="text-sm text-gray-600 mb-2">
                            {post.createdDate}
                        </p>
                        <TagGroup tags={post.tags} />
                    </div>
                ))}
            </div>
        </React.Fragment>
    );
}
 
export default PostHomePage;