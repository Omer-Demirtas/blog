import Post, { ElementType } from "@/types/post";

const posts: Post[] = [
    {
        id: '1',
        title: 'Spring Boot',
        path: ['spring-boot'],
        tags: [{id: '1', name: 'java', color: 'green', slug: 'java'}],
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
                    id: '2',
                    path: ['spring-boot', 'spring-boot-conditional'],
                    title: 'Spring Boot Conditional',
                }
            },
            {
                id: '3',
                type: ElementType.TEXT,
                content: 'Hello guys this pages about spring boot apps Hello guys this pages about spring boot apps Hello guys this pages about spring boot apps Hello guys this pages about spring boot apps Hello guys this pages about spring boot apps Hello guys this pages about spring boot appsHello guys this pages about spring boot appsHello guys this pages about spring boot apps Hello guys this pages about spring boot apps Hello guys this pages about spring boot apps Hello guys this pages about spring boot apps Hello guys this pages about spring boot apps Hello guys this pages about spring boot appsHello guys this pages about spring boot appsHello guys this pages about spring boot apps Hello guys this pages about spring boot apps Hello guys this pages about spring boot apps Hello guys this pages about spring boot apps Hello guys this pages about spring boot apps Hello guys this pages about spring boot appsHello guys this pages about spring boot appsHello guys this pages about spring boot apps Hello guys this pages about spring boot apps Hello guys this pages about spring boot apps Hello guys this pages about spring boot apps Hello guys this pages about spring boot apps Hello guys this pages about spring boot appsHello guys this pages about spring boot appsHello guys this pages about spring boot apps Hello guys this pages about spring boot apps Hello guys this pages about spring boot apps Hello guys this pages about spring boot apps Hello guys this pages about spring boot apps Hello guys this pages about spring boot appsHello guys this pages about spring boot appsHello guys this pages about spring boot apps Hello guys this pages about spring boot apps Hello guys this pages about spring boot apps Hello guys this pages about spring boot apps Hello guys this pages about spring boot appsHello guys this pages about spring boot appsHello guys this pages about spring boot apps Hello guys this pages about spring boot apps Hello guys this pages about spring boot apps Hello guys this pages about spring boot apps Hello guys this pages about spring boot apps Hello guys this pages about spring boot appsHello guys this pages about spring boot appsHello guys this pages about spring boot apps Hello guys this pages about spring boot apps Hello guys this pages about spring boot apps Hello guys this pages about spring boot apps Hello guys this pages about spring boot apps Hello guys this pages about spring boot appsHello guys this pages about spring boot appsHello guys this pages about spring boot apps Hello guys this pages about spring boot apps Hello guys this pages about spring boot apps Hello guys this pages about spring boot apps Hello guys this pages about spring boot apps Hello guys this pages about spring boot appsHello guys this pages about spring boot appsHello guys this pages about spring boot apps Hello guys this pages about spring boot apps Hello guys this pages about spring boot apps Hello guys this pages about spring boot apps Hello guys this pages about spring boot apps Hello guys this pages about spring boot apps Hello guys this pages about spring boot appsHello guys this pages about spring boot appsHello guys this pages about spring boot apps Hello guys this pages about spring boot apps Hello guys this pages about spring boot apps Hello guys this pages about spring boot apps Hello guys this pages about spring boot apps Hello guys this pages about spring boot appsHello guys this pages about spring boot appsHello guys this pages about spring boot apps Hello guys this pages about spring boot apps Hello guys this pages about spring boot apps Hello guys this pages about spring boot apps Hello guys this pages about spring boot apps Hello guys this pages about spring boot apps Hello guys this pages about spring boot appsHello guys this pages about spring boot appsHello guys this pages about spring boot apps Hello guys this pages about spring boot apps Hello guys this pages about spring boot apps Hello guys this pages about spring boot apps Hello guys this pages about spring boot apps Hello guys this pages about spring boot appsHello guys this pages about spring boot appsHello guys this pages about spring boot apps Hello guys this pages about spring boot apps Hello guys this pages about spring boot apps Hello guys this pages about spring boot apps Hello guys this pages about spring boot apps Hello guys this pages about spring boot appsHello guys this pages about spring boot appsHello guys this pages about spring boot apps Hello guys this pages about spring boot apps Hello guys this pages about spring boot apps Hello guys this pages about spring boot apps Hello guys this pages about spring boot apps Hello guys this pages about spring boot appsHello guys this pages about spring boot apps',
            },
            {
                id: '4',
                type: ElementType.TEXT,
                content: 'Hello guys this pages about spring boot apps',
            },
        ],
        comments: [],
        createdDate: 'Today'
    },
    {
        id: '2',
        title: 'Spring Boot Contional',
        path: ['spring-boot', 'spring-boot-conditional'],
        tags: [{id: '1', name: 'java', color: 'green', slug: 'java'}],
        content: [
            {
                id: '123',
                type: ElementType.TEXT,
                content: 'Hello guys this pages about spring boot conditonal app',
            },
        ],
        comments: [],
        createdDate: 'Today'
    }
];

export default posts;