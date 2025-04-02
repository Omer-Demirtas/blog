export interface Tag {
  id: string;
  name: string;
  slug: string;
  color: string;
}

export type PostElement = {
  id: string;
  type: ElementType;
  content: string | PostLink;
  children?: PostElement[];
};

export type PostComment = {
  id: string;
  author: string;
  content: string;
  createdDate: string;
};

export type Post = {
  id: string;
  title: string;
  path: string[];
  tags: Tag[];
  content: PostElement[];
  createdDate: string;
  comments: PostComment[];
};

export interface PostLink {
  id: string;
  title: string;
  path: string[];
}

export enum ElementType {
  TEXT = 'TEXT',
  POST = 'POST'
}

export default Post;