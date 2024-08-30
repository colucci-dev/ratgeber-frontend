import { ReactElement, JSXElementConstructor, ReactNode, AwaitedReactNode, JSX } from "react";
import { CategoryResult } from "../classes/category";
import CategoryView from "../components/Blog/CategoryView";
import PageContainer from "../components/PageContainer";
import { fetchAPI } from "../utils/api";

export const dynamic = "force-dynamic";
export default async function Blog() {
    const categories : [CategoryResult] = (await fetchAPI("categories?populate[blogs][populate][0]=Image")).data;

    var views: JSX.Element[] = [];

    categories.forEach((cat, index) => {
        views.push(
            <CategoryView key={cat.id} category={cat} />
        )
    });
    return (
        <PageContainer image="assets/car_img.webp">
        {views}
        </PageContainer>
    )
}
