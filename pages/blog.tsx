import AllPosts from "../components/Posts/AllPosts";
import PostPreview from "../components/Posts/PostPreview";
import { GetPostsQuery, useGetPostsQuery } from "../generated/graphql";
import { client } from "../graphql/apollo";
import { GET_POSTS } from "../graphql/query.graphql";

function Blog({ posts }: GetPostsQuery) {
  // console.log(posts);
  // if (!posts) return <p>loading...</p>;
  return (
    <div>
      <h1>All my blog posts</h1>
      {posts.map((post) => {
        return <PostPreview key={post.id} post={post} />;
      })}
    </div>
  );
}

export default Blog;

export async function getStaticProps() {
  const {
    data: { posts },
  } = await client.query<GetPostsQuery>({
    query: GET_POSTS,
  });

  return {
    props: { posts },
  };
}
