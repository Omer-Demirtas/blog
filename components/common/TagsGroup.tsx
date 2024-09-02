import TagBadge from "./TagBadge";


const TagGroup = ({ tags } : { tags: Tag[] }) => {
    return ( 
        <div className="flex gap-2">
            {
                tags.map(tag => (
                    <TagBadge key={`tag-${tag.id}`} tag={tag} />
                ))
            }
        </div>
    );
}
 
export default TagGroup;