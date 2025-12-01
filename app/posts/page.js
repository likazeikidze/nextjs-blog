import AllPosts from "../../components/posts/AllPosts";

const DUMMY_POSTS = [
  {
    slug: "getting-started-with-nextjs",
    title: "Getting Started with Next.js",
    image: "getting-started-nextjs.png",
    excerpt:
      "Next.js is the React framework for building modern fullstack apps",
    date: "2025-11-30",
  },
  {
    slug: "getting-started-with-nextjs2",
    title: "Getting Started with Next.js",
    image: "getting-started-nextjs.png",
    excerpt:
      "Next.js is the React framework for building modern fullstack apps",
    date: "2025-11-30",
  },
  {
    slug: "getting-started-with-nextjs3",
    title: "Getting Started with Next.js",
    image: "getting-started-nextjs.png",
    excerpt:
      "Next.js is the React framework for building modern fullstack apps",
    date: "2025-11-30",
  },
  {
    slug: "getting-started-with-nextjs4",
    title: "Getting Started with Next.js",
    image: "getting-started-nextjs.png",
    excerpt:
      "Next.js is the React framework for building modern fullstack apps",
    date: "2025-11-30",
  },
];

const PostsPage = () => {
  return <AllPosts posts={DUMMY_POSTS} />;
};

export default PostsPage;
