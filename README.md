# Meme-Search-Engine

## Basic Informations
Function: Testing out the capabilities of a vector database (weaviate) by building an image meme search engine  
Tech Stack: Javascript + NPM + Weaviate  
Feature:
- Store meme images to the vector database
- Input an image and you can get a meme with the most similar features that your input image have

## How to Run?
Make sure that you are using the newest version of `node` and have `docker` installed
```
docker-compose up -d
npm i
npm run start
```
Note: its better to have docker desktop installed so that you can view the running containers
<img width="967" alt="Screenshot 2023-04-22 at 10 09 50 AM" src="https://user-images.githubusercontent.com/78072759/233758822-c0d84ca7-2789-4899-ad88-d446e2552324.png">

## Results
| Input Image             |  Output Image |
:-------------------------:|:-------------------------:
![](./testImg/test3.png) | ![](./result.jpg)
![](./testImg/test1.png) | ![](./img/meme1.jpeg)
![](./testImg/test4.webp) | ![](./img/meme2.jpeg)
![](./testImg/test5.jpeg) | ![](./img/meme4.webp)
