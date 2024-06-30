type CardProps = {
    image: string,
    href: string,
    title: string,
    category: string,
    date: string,
    teaser: string,
}

export default function Card(props : CardProps) {
return (
    <div className="grid-card">
        <a href={`/${props.href}`}>
            <img src={props.image} />
        <h6>{props.category} | {props.date}</h6>
        <h2>{props.title.toLocaleUpperCase()}</h2>
        <p>{props.teaser}</p>
        </a>
    </div>
)
}