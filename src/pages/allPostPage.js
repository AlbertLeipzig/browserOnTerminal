import { c } from "../components/basicComponents.js";
import { blogData } from "../data/blogData.js";

const { pageTitle, bold, line, navigateLink } = c;

export const allPostPage = () => {
  console.clear();
  pageTitle("All Post");
  blogData.forEach((post) => {
    bold(post.title);
    line();
  });
  navigateLink();
};
