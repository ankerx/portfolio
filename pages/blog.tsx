import { StyledH1 } from "../components/Header/styledHeader";
import PostPreview from "../components/Posts/PostPreview";
import { GetPostsQuery } from "../generated/graphql";
import { client } from "../graphql/apollo";
import { GET_POSTS } from "../graphql/query.graphql";
import { Section, SectionBlog } from "../styles/globalStyles";

function Blog({ posts }: GetPostsQuery) {
  return (
    <Section>
      <StyledH1>All my blog posts</StyledH1>
      {posts.map((post) => {
        return <PostPreview key={post.id} post={post} />;
      })}
    </Section>
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
