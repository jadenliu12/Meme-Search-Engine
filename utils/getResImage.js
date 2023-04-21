import { imgToBase64Converter } from "./imgToBase64Converter.js";
import fs from "fs";

export const getResImage = async (
  client,
  imgUrl,
  resLimit
) => {
  console.log("START FINDING IMAGE");
  const test = imgToBase64Converter(imgUrl);

  const resImage = await client.graphql
    .get()
    .withClassName("Meme")
    .withFields("image")
    .withNearImage({ image: test })
    .withLimit(resLimit)
    .do();

  // Write result to filesystem
  const result = resImage.data.Get.Meme[0].image;
  fs.writeFileSync("./result.jpg", result, "base64");
  console.log("FINISH FINDING IMAGE");
};
