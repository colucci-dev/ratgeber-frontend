import { BlocksContent, BlocksRenderer } from "@strapi/blocks-react-renderer";

export default function BlogText(props: {content: BlocksContent}) {

    return (
        <BlocksRenderer content={props.content}
        />
    )
}