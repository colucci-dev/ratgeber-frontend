import { ReactNode } from "react"
type Props = {
    image : string,
    children: ReactNode
}
export default function PageContainer(props: Props) {
    return (
    <div className="page-container">
        <img className="teaser-img" src={props.image} />
        {props.children}
    </div>
    )
}