import PageContainer from "../components/PageContainer";
import { fetchAPI } from "../utils/api";
import { BlocksRenderer, type BlocksContent } from "@strapi/blocks-react-renderer";

export default async function Glossar() {
  const x = await fetchAPI("begriffe");
  const result = x.data.map((begriff: any) => {
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
      <div className="blog-wrapper"><div className="blogArticle">
        
      {result}
      </div>
      </div>
      </PageContainer>
  );
}
