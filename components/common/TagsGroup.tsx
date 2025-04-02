"use client";

import { motion } from "framer-motion";
import TagBadge from "./TagBadge";
import { Tag } from "@/types/tag";

interface TagsGroupProps {
  tags: Tag[];
}

const TagGroup = ({ tags }: TagsGroupProps) => {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag, index) => (
        <motion.div
          key={tag.id}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          <TagBadge tag={tag} />
        </motion.div>
      ))}
    </div>
  );
};

export default TagGroup;