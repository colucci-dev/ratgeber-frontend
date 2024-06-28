import PageContainer from "../components/PageContainer";
import { fetchAPI } from "../utils/api";
import { BlocksRenderer, type BlocksContent } from "@strapi/blocks-react-renderer";

export default async function Words() {
  const x = await fetchAPI("begriffe");
   console.log(x);
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
    <PageContainer image="bmw_m8.png">
      <h1>Hello World!</h1>
      {result}
      </PageContainer>
  );
}
