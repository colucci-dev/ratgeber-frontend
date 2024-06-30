import { BlocksContent } from "@strapi/blocks-react-renderer";
import { CategoryResult } from "./category";
import { StrapiImage } from "./image";

export type ArticleResult = {
    id: number;
    attributes: ArticleAttributes;
};

export type ArticleAttributes = {
    Title: string;
    slug: string;
    publishedAt: string;
    Description: string;
    Content: BlocksContent;
    Image: {data: StrapiImage};
    category: {data: CategoryResult} | null;
};