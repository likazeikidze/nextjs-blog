import FeaturedPosts from "../components/home-page/FeaturedPosts";
import Hero from "../components/home-page/Hero";

import { getFeaturedPosts } from "../lib/posts";

export default function HomePage() {
  const featuredPosts = getFeaturedPosts();

  return (
    <>
      <Hero />
      <FeaturedPosts posts={featuredPosts} />
    </>
  );
}
