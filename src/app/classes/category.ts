import { ArticleResult } from "./article";

export type CategoryResult = {
    id: number;
    attributes: CategoryAttributes;
}

export type CategoryAttributes = {
    Name: string;
    slug: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    blogs: {data: [ArticleResult]}; 
}
