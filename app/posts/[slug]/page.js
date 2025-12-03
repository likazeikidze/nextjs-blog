import PostContent from "../../../components/posts/post-detail/PostContent";
import { getPostData } from "../../../lib/posts";

export const revalidate = 600;

const PostDetailPage = async ({ params }) => {
  const { slug } = await params;

  const post = getPostData(slug);

  return <PostContent post={post} />;
};

export default PostDetailPage;
