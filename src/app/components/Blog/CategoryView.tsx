import { CategoryResult } from "@/app/classes/category";
import Card from "../Card";

export default function CategoryView(props: {category: CategoryResult}) {
    
    var cards: JSX.Element[] = [];

    props.category.attributes.blogs.data.forEach((article, index) => {
        cards.push(<Card 
        key={article.id}
        image={`${process.env.API_URL}${article.attributes.Image.data.attributes.formats.medium.url}`}
        href={`blog/${article.attributes.slug}`} 
        title={article.attributes.Title} 
        category={props.category.attributes.Name}
        date={article.attributes.publishedAt}
        teaser={article.attributes.Description} />
        );

    });

    return (
    <div className="container">
        <div className="title">{props.category.attributes.Name}</div>
            <div className="grid-container">
                {cards}
            </div>
    </div>
    )
}