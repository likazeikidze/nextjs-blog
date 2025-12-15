import PostContent from "../../../components/posts/post-detail/PostContent";
import { getPostData } from "../../../lib/posts";

export const revalidate = 600;

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPostData(slug);

  return {
    title: post.title,
    description: post.excerpt,
  };
}

const PostDetailPage = async ({ params }) => {
  const { slug } = await params;

  const post = getPostData(slug);

  return <PostContent post={post} />;
};

export default PostDetailPage;
