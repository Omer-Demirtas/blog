export type Tag = string;

export type PostElement = {
  type: string;
  content: string;
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
    id: String;
    title: String;
    path: String[];
}

export enum ElementType {
    TEXT,
    POST
}

export default Post;