import BlogHeader from "../../components/Blog/BlogHeader";
import BlogText from "../../components/Blog/BlogText";
import PageContainer from "../../components/PageContainer";

export default function Blog({ params }: { params: { slug: string } }) {

    return (
        <PageContainer image="bmw_m8.png">
            BlogPost {params.slug}
        <BlogHeader />
        <BlogText />
        </PageContainer>
    )
}