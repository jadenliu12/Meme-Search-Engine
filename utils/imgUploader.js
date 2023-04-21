import { imgToBase64Converter } from "./imgToBase64Converter.js";
import fs from "fs";

export const imgUploader = async (client) => {
  console.log("START IMAGE UPLOAD");
  const imgFiles = fs.readdirSync("./img");

  const promises = imgFiles.map(async (imgFile) => {
    const b64 = imgToBase64Converter(`./img/${imgFile}`);

    await client.data
      .creator()
      .withClassName("Meme")
      .withProperties({
        image: b64,
        text: imgFile.split(".")[0].split("_").join(" "),
      })
      .do();
  });

  await Promise.all(promises);
  console.log("FINISH IMAGE UPLOAD");
};
