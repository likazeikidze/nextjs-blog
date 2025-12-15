import AllPosts from "../../components/posts/AllPosts";
import { getAllPosts } from "../../lib/posts";

export const metadata = {
  title: "All Posts",
  description: "A list of all programming-related tutorials and posts!",
};

const PostsPage = () => {
  const allPosts = getAllPosts();
  return <AllPosts posts={allPosts} />;
};

export default PostsPage;
