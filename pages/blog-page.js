import Layout from "../components/Layout"
import { getAllPostsData } from "../lib/posts";
import Post from "../components/Post.js";

const Blog = ({ posts }) => {
  return (
    <Layout title="Blog">
        <ul className="m-10">
            {posts && posts.map((post) => <Post key={post.id} post={post} /> )}
        </ul>
      Blog page
    </Layout>
  );
};

export default Blog;

export async function getStaticProps() {
    const posts = await getAllPostsData();
    return {
        props: { posts },
    };
}
