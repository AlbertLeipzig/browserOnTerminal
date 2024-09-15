import readline from "readline";
import readlineSync from "readline-sync";
import { allPostPage } from "../pages/allPostPage.js";
import { singlePostPage } from "../pages/singlePostPage.js";
import { createPostPage } from "../pages/createPostPage.js";
import { blogData } from "../data/blogData.js";
import { deletePostPage } from "../pages/deletePostPage.js";

readline.emitKeypressEvents(process.stdin);

if (process.stdin.isTTY) {
  process.stdin.setRawMode(true);
}

export const navigation = () => {
  process.stdin.on("keypress", (str, key) => {
    if (key.name === "space") {
      console.clear();
      const pages = [
        ["TO VISIT:", "PRESS:"],
        ["all posts", "all"],
        ["create post", "post"],
        ["delete post", "delete"],
        ...blogData.map((entry) => [entry.title, `single.${entry.id}`]),
      ];

      console.table(pages);

      const url = readlineSync.question("Enter page: ");

      const [page, id] = url.split(".");

      switch (page) {
        case "all":
          allPostPage(id);
          break;
        case "single":
          singlePostPage(id);
          break;
        case "post":
          createPostPage();
          break;
        case "delete":
          deletePostPage();
          break;
        default:
          console.log("Invalid type");
          break;
      }
    }
  });
};
