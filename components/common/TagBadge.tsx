"use client";

import { Badge } from "@/components/ui/badge";
import { Tag } from "@/types/tag";

interface TagBadgeProps {
  tag: Tag;
}

const TagBadge = ({ tag }: TagBadgeProps) => {
  return (
    <Badge variant="secondary" className="glass-effect" style={{ backgroundColor: tag.color }}>
      {tag.name}
    </Badge>
  );
};

export default TagBadge;