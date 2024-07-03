import { ReactElement, JSXElementConstructor, ReactNode, AwaitedReactNode, JSX } from "react";
import { CategoryResult } from "../classes/category";
import CategoryView from "../components/Blog/CategoryView";
import PageContainer from "../components/PageContainer";
import { fetchAPI } from "../utils/api";


export default async function Blog() {
    const categories = await getCategoriesWithArticles();

    var views: JSX.Element[] = [];

    categories.forEach((cat, index) => {
        views.push(
            <CategoryView key={cat.id} category={cat} />
        )
    });
    return (
        <PageContainer image="assets/bmw_m8.png">
        {views}
        </PageContainer>
    )

async function getCategoriesWithArticles() {
    const result : [CategoryResult] = (await fetchAPI("categories?populate[blogs][populate][0]=Image")).data;
    return result;
}
}
