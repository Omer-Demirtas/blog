import { PostElement, ElementType, PostLink, Post } from "@/types/post";
import TypographyH4 from "../common/TypographyH4";
import PostLinkElement from "./PostLinkElement";

interface PostBodyProps {
  post: Post;
}

export default function PostBody({ post }: PostBodyProps) {
  const createElementByType = (element: PostElement) => {
    switch (element.type) {
      case ElementType.TEXT:
        return <TypographyH4 key={element.id}>{element.content as string}</TypographyH4>;
      case ElementType.POST:
        return <PostLinkElement key={element.id} postLink={element.content as PostLink} />;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-4">
      {post.content.map((element) => createElementByType(element))}
    </div>
  );
}