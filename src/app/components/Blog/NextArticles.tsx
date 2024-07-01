import { ArticleResult } from "@/app/classes/article";
import { fetchAPI } from "@/app/utils/api"
import Card from "../Card";

export default async function NextArticles() {
    const articles : {data: [ArticleResult]} = await fetchAPI("blogs?populate=Image,category&pagination[pageSize]=3&pagination[page]=1")

    const previews : JSX.Element[] = [];

    articles.data.forEach((article, index) => {
        previews.push(
            <Card 
            key={article.id}
        image={`${process.env.API_URL}${article.attributes.Image.data.attributes.formats.medium.url}`}
        href={`blog/${article.attributes.slug}`} 
        title={article.attributes.Title} 
        category={article.attributes.category?.data.attributes.Name ?? "Unkategorisiert"}
        date={article.attributes.publishedAt}
        teaser={article.attributes.Description}
         />
        )
    })

    return (
        <div className="container">
            <div className="title">Weitere Artikel</div>
            <div className="grid-container">
                {previews} 
            </div>
        </div>
    )
}