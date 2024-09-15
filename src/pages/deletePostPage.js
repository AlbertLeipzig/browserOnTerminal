import { c } from "../components/basicComponents.js";
import readlineSync from "readline-sync";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { blogData } from "../data/blogData.js";

const { line, a, navigateLink } = c;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const blogDataPath = path.resolve(__dirname, "../data/blogData.js");

const deleteBlog = (id) => {
  const updatedBlogs = blogData.filter((blog) => blog.id !== id);
  const updatedBlogData = `export const blogData = ${JSON.stringify(
    updatedBlogs,
    null,
    2
  )};`;
  fs.writeFileSync(blogDataPath, updatedBlogData, "utf-8");
};

export const deletePostPage = () => {
  console.clear();
  line();
  const options = blogData.map((post) => `${post.title} (ID: ${post.id})`);
  const index = readlineSync.keyInSelect(
    options,
    "Which of the following posts do you want to delete?"
  );

  if (index !== -1) {
    const selectedPost = blogData[index];
    if (
      readlineSync.keyInYN(
        `Are you sure you want to delete "${selectedPost.title}"?`
      )
    ) {
      deleteBlog(selectedPost.id);
      console.log("Post deleted successfully!");
    } else {
      console.clear();
      a("Press spacebar to navigate");
    }
  } else {
    console.clear();
    navigateLink();
  }
};
