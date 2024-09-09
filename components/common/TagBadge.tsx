import { Badge } from "../ui/badge";

const TagBadge = ({ tag } : { tag: Tag }) => {
    return <Badge>{tag.name}</Badge>
}
 
export default TagBadge;