import { fetchAPI } from "./utils/api";
import { BlocksRenderer, type BlocksContent } from "@strapi/blocks-react-renderer";

export default async function Home() {
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
    <div style={{padding: "30px"}}>
      <h1>Hello World!</h1>
      {result}
    </div>
  );
}
