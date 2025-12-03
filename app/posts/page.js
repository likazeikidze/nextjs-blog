import AllPosts from "../../components/posts/AllPosts";
import { getAllPosts } from "../../lib/posts";

const PostsPage = () => {
  const allPosts = getAllPosts();
  return <AllPosts posts={allPosts} />;
};

export default PostsPage;
