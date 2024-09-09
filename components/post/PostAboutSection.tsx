import Post from "@/types/post";
import TagGroup from "../common/TagsGroup";
import TypographyH4 from "../common/TypographyH4";


const PostAboutSection = ({ post } : { post: Post }) => {
    return (
        <div className="flex flex-col gap-4">
            <div>
                <TypographyH4>{`Ömer Demirtaş ${post.createdDate}`}</TypographyH4>
            </div>
            <div>
                <TagGroup tags={post.tags} />
            </div>    
        </div>
    );
}

export default PostAboutSection;