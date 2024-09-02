import Post, { ElementType } from "@/types/post";
import { Content } from "next/font/google";

const posts: Post[] = [
    {
        id: '1',
        title: 'Spring Boot',
        path: ['spring-boot'],
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
                    path: ['spring-boot', 'spring-boot-conditional'],
                    content: [],
                    comments: [],
                    createdDate: 'Today'
                }
            },
            {
                id: '3',
                type: ElementType.TEXT,
                content: 'Hello guys this pages about spring boot apps Hello guys this pages about spring boot apps Hello guys this pages about spring boot apps Hello guys this pages about spring boot apps Hello guys this pages about spring boot apps Hello guys this pages about spring boot appsHello guys this pages about spring boot apps',
            },
            {
                id: '4',
                type: ElementType.TEXT,
                content: 'Hello guys this pages about spring boot apps',
            },
        ],
        comments: [],
        createdDate: 'Today'
    }
];

export default posts;