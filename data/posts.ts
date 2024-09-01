import Post, { ElementType } from "@/types/post";
import { Content } from "next/font/google";

const posts: Post[] = [
    {
        id: '1',
        title: 'Spring Boot',
        content: [
            {
                id: '1',
                type: ElementType.TEXT,
                content: 'Hello guys this pages about spring boot apps',
            },
            {
                id: '2',
                type: ElementType.POST,
                content: {
                    id: '1',
                    title: 'Spring Boot Conditional',
                    content: [],
                    comments: [],
                    createdDate: 'Today'
                }
            }
        ],
        comments: [],
        createdDate: 'Today'
    }
];

export default posts;