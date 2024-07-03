import { ArticleResult } from "../classes/article"

type CardProps = {
    image: string,
    href: string,
    title: string,
    category: string,
    date: string,
    teaser: string,
}

export default function Card(props : CardProps) {
    let date = new Date(props.date);
    return (
        <div className="grid-card">
            <a href={`/${props.href}`}>
                <img src={props.image} />
            <h6>{props.category} | {date.toLocaleDateString()}</h6>
            <h2>{props.title}</h2>
            <p>{props.teaser}</p>
            </a>
        </div>
    )
}