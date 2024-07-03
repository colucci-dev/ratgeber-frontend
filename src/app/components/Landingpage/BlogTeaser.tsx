import { ArticleResult } from "@/app/classes/article";
import Card from "../Card"
import { fetchAPI } from "@/app/utils/api";

export default async function BlogTeaser() {
    
    const articles : {data: [ArticleResult]} = await fetchAPI("blogs?populate=Image,category&sort[0]=publishedAt:desc&pagination[pageSize]=4&pagination[page]=1")
    
    const headline = articles.data.pop()!;
    
    const blogPreview: JSX.Element[] = [];
    articles.data.forEach((article, index) => {
        blogPreview.push(
            <Card 
            key={article.id}
            image={`${process.env.API_URL}${article.attributes.Image.data.attributes.formats.medium.url}`}
            href={`blog/${article.attributes.slug}`} 
            title={article.attributes.Title} 
            category={article.attributes.category?.data.attributes.Name ?? "Unkategorisiert"}
            date={article.attributes.publishedAt}
            teaser={article.attributes.Description} />
        );

    })
    return (
    <div className="container">
        <div className="title">Aktuelle Themen</div>

        <a href={`/blog/${headline.attributes.slug}`} >
            <div className="headline">
                <div className="headline-item">
                    <img src={`${process.env.API_URL}${headline.attributes.Image.data.attributes.formats.medium.url}`} />
                </div>
                <div className="headline-item headline-content">
                    <h6>{headline.attributes.category?.data.attributes.Name ?? "Unkategorisiert"} | {new Date(headline.attributes.publishedAt).toLocaleDateString()}</h6>
                    <h2>{headline.attributes.Title.toUpperCase()}</h2>
                    <p>{headline.attributes.Description}</p>
                </div>
            </div>
        </a>
        <div className="grid-container">
            {blogPreview}
        </div>
        <a className="button" href="/blog"><span>Lesen Sie mehr</span><img src="assets/right-arrow.svg" /></a>
    </div>
    )

}
