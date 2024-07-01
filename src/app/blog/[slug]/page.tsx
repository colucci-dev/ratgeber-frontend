import { fetchAPI } from "@/app/utils/api";
import BlogHeader from "../../components/Blog/BlogHeader";
import BlogText from "../../components/Blog/BlogText";
import PageContainer from "../../components/PageContainer";
import { ArticleResult } from "@/app/classes/article";
import NextArticles from "@/app/components/Blog/NextArticles";

export default async function Blog({ params }: { params: { slug: string } }) {
    const blogArticle : ArticleResult = (await fetchAPI(`blogs?filters[slug][$eq]=${params.slug}&populate=Image,category&pagination[pageSize]=1&pagination[page]=1`)).data[0];

    return (
        <PageContainer image={`${process.env.API_URL}${blogArticle.attributes.Image.data.attributes.url}`}>
        <div className="blog-wrapper">
            <div className="blogArticle">
                <BlogHeader 
                category={blogArticle.attributes.category?.data.attributes.Name ?? "Ohne Kategorie"}
                title={blogArticle.attributes.Title} 
                description={blogArticle.attributes.Description}
                date={blogArticle.attributes.publishedAt} />
                <BlogText 
                content={blogArticle.attributes.Content}
                />
            </div>
        </div>
        <NextArticles />
        </PageContainer>
    )
}