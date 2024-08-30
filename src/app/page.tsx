import Assistant from "./components/Landingpage/Assistant";
import BlogTeaser from "./components/Landingpage/BlogTeaser";
import ShortLinks from "./components/Landingpage/ShortLinks";
import PageContainer from "./components/PageContainer";

export const dynamic = "force-dynamic";
export default function Home() {
    return (
        <PageContainer image={`${process.env.NEXT_API}/assets/car_img.webp`}>
        <ShortLinks />
        <Assistant />
        <BlogTeaser />
        </PageContainer>
    )
}