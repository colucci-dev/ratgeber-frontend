export default function BlogHeader(props: {category: string, title: string, description: string, date: string}) {
    return (
        <div className="blog-header">
    <h5>
        {props.category} | {props.date}
    </h5>
    <h1>
        {props.title.toUpperCase()}
    </h1>
    <b><p>
       {props.description} 
    </p></b>
    </div>
    )
}