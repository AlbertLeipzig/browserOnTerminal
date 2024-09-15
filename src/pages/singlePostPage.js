import { c } from "../components/basicComponents.js";
import { blogData } from "../data/blogData.js";

const { line, pageTitle, navigateLink, section } = c;

export const singlePostPage = (id) => {
  console.clear();
  line();

  const singleBlogData = blogData.find((post) => post.id === Number(id));
  if (!singleBlogData) {
    pageTitle("Post not found");
    return;
  }
  pageTitle(singleBlogData.title);

  singleBlogData.content.forEach((post) => section(post));
  navigateLink();
};
