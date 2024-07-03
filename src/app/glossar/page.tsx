import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import PageContainer from "../components/PageContainer";
import { fetchAPI } from "../utils/api";
import { BlocksRenderer, type BlocksContent } from "@strapi/blocks-react-renderer";


export const getServerSideProps = (async () => {
  // Fetch data from external API
  const keywords = await fetchAPI("begriffe");
  // Pass data to the page via props
  return { props: { keywords } }
}) satisfies GetServerSideProps<{ keywords: any }>
 

export default function Page({
  keywords,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
 
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
    <PageContainer image="assets/bmw_m8.png">
      <div className="blog-wrapper">
        <div className="blogArticle">
        
      {result}
      </div>
      </div>
      </PageContainer>
  );
}
