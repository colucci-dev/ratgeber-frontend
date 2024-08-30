import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import PageContainer from "../components/PageContainer";
import { fetchAPI } from "../utils/api";
import { BlocksRenderer, type BlocksContent } from "@strapi/blocks-react-renderer";

export const dynamic = "force-dynamic";
export default async function Page() {
  const keywords = await fetchAPI("begriffe");
  const result = keywords.data.map((begriff: any) => {
      return <div key={begriff.id}>
        <h1>
          {begriff.attributes.Begriff}
        </h1>
        <BlocksRenderer content={begriff.attributes.Definition} />
      </div>
  }
  );

  return (
    <PageContainer image="assets/car_img.webp">
      <div className="blog-wrapper">
        <div className="blogArticle">
      <div className="title">Glossar</div>
      <p><b>Hier finden Sie eine Erläuterung der wichtigsten Fachbegriffe aus dem Bereich Content Management, die Ihnen wahrscheinlich nicht geläufig sind.</b></p>
      {result}
      </div>
      </div>
      </PageContainer>
  );
}
