import readlineSync from "readline-sync";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { c } from "../components/basicComponents.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const blogDataPath = path.resolve(__dirname, "../data/blogData.js");

export const createPostPage = async () => {
  let content = [];
  const title = readlineSync.question("Title: ");

  const getContent = () => {
    const section = readlineSync.question("Section title: ");
    const body = readlineSync.question("Body: ");
    content.push({ section, body });
    if (readlineSync.keyInYN("Add another section?")) {
      getContent();
    } else {
      return content;
    }
  };

  console.log("Content:");
  getContent();
  console.clear();

  const blogDataModule = await import(blogDataPath);
  const blogData = blogDataModule.blogData;

  const getLastId = () => {
    if (blogData.length === 0) {
      return null;
    }
    return blogData[blogData.length - 1].id;
  };

  const id = getLastId() + 1;

  const newPost = { id, title, content };
  blogData.push(newPost);

  const updatedBlogData = `export const blogData = ${JSON.stringify(
    blogData,
    null,
    2
  )};`;
  fs.writeFileSync(blogDataPath, updatedBlogData, "utf-8");
  c.message("success!!");
  navigateLink();
};
