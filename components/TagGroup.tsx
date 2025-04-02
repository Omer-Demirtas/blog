import { Tag } from "@/types/post";
import Link from "next/link";

interface TagGroupProps {
  tags: Tag[];
}

export default function TagGroup({ tags }: TagGroupProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <Link
          key={tag.id}
          href={`/blog/tags/${tag.slug}`}
          className="glass-effect px-3 py-1 rounded-full text-sm text-primary hover:text-primary/80 transition-colors"
          style={{ borderColor: tag.color }}
        >
          {tag.name}
        </Link>
      ))}
    </div>
  );
} 