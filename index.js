import weaviate from "weaviate-ts-client";
import { imgUploader } from "./utils/imgUploader.js";
import { getResImage } from "./utils/getResImage.js";

const client = weaviate.client({
  scheme: "http",
  host: "localhost:8080",
});

const schemaRes = await client.schema.getter().do();

// Create schema if it is empty
if (schemaRes.classes && schemaRes.classes.length === 0) {
  const schemaConfig = {
    class: "Meme",
    vectorizer: "img2vec-neural",
    vectorIndexType: "hnsw",
    moduleConfig: {
      "img2vec-neural": {
        imageFields: ["image"],
      },
    },
    properties: [
      {
        name: "image",
        dataType: ["blob"],
      },
      {
        name: "text",
        dataType: ["string"],
      },
    ],
  };

  await client.schema.classCreator().withClass(schemaConfig).do();
}

// Upload all images in img directory
await imgUploader(client);

// Test search engine
await getResImage(client, "./testImg/test3.png", 1);
