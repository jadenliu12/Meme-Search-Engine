import fs from "fs";

export const imgToBase64Converter = (imgUrl) => {
  const img = fs.readFileSync(imgUrl);
  return Buffer.from(img).toString("base64");
};
