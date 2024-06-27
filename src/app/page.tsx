import Assistant from "./components/Landingpage/Assistant";
import BlogTeaser from "./components/Landingpage/BlogTeaser";
import ShortLinks from "./components/Landingpage/ShortLinks";
import PageContainer from "./components/PageContainer";

export default function Home() {
    return (
        <PageContainer image="assets/bmw_m8.png">
        <h1>guten tag</h1>
        <ShortLinks />
        <Assistant />
        <BlogTeaser />
        </PageContainer>
    )
}