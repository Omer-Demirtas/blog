
interface Post {
    id: String;
    title: String;
    path: String[];
    tags: Tag[];
    content: PostElement[];
    createdDate: String;
    comments: PostComment[];
};

export interface PostElement {
    id: String;
    type: ElementType;
    content: String | PostLink;
    params?: Object;
}

export interface PostLink {
    id: String;
    title: String;
    path: String[];
}

export enum ElementType {
    TEXT,
    POST
}

export interface PostComment {
    id: String;
    title: String;
    userId: String;
    content: String;
}

export default Post;