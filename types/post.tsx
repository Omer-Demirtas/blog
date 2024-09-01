
interface Post {
    id: String;
    title: String;
    content: PostElement[];
    createdDate: String;
    comments: PostComment[];
};

export interface PostElement {
    id: String;
    type: ElementType;
    content: any;
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