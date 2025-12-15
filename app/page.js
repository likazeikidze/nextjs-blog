import FeaturedPosts from "../components/home-page/FeaturedPosts";
import Hero from "../components/home-page/Hero";

import { getFeaturedPosts } from "../lib/posts";

export const metadata = {
  title: "Lika's Blog",
  description: "I post about programming and web development.",
};

export default function HomePage() {
  const featuredPosts = getFeaturedPosts();

  return (
    <>
      <Hero />
      <FeaturedPosts posts={featuredPosts} />
    </>
  );
}
