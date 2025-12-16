import PostsGrid from "../posts/PostsGrid";
import classes from "./FeaturedPosts.module.css";

const FeaturedPosts = ({ posts }) => {
  return (
    <section className={classes.latest}>
      <div className={classes.inner}>
        <h2>Featured Posts</h2>

        <PostsGrid posts={posts} />
      </div>
    </section>
  );
};

export default FeaturedPosts;
