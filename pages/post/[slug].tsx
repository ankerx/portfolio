/* eslint-disable react/no-children-prop */
import { GetPostsQuery, GetSinglePostQuery } from "../../generated/graphql";
import { client } from "../../graphql/apollo";
import { GET_POSTS, GET_SINGLE_POST } from "../../graphql/query.graphql";
import ReactMarkdown from "react-markdown";
import {
  BackgroundGradientBottom,
  BackgroundGradientTop,
  SectionBlog,
} from "../../styles/globalStyles";
export default function Post({ post }: GetSinglePostQuery) {
  return (
    <SectionBlog>
      <h2>{post?.title}</h2>
      <ReactMarkdown children={post?.content?.markdown || ""} />
      <BackgroundGradientBottom />
      <BackgroundGradientTop />
    </SectionBlog>
  );
}

export async function getStaticProps({
  params,
}: {
  params: {
    slug: string | null | undefined;
  };
}) {
  const {
    data: { post },
  } = await client.query<GetSinglePostQuery>({
    query: GET_SINGLE_POST,
    variables: {
      slug: params.slug,
    },
  });

  return {
    props: { post },
  };
}
export async function getStaticPaths() {
  const {
    data: { posts },
  } = await client.query<GetPostsQuery>({
    query: GET_POSTS,
  });
  const slugs = posts.map((post) => ({ params: { slug: post.slug } }));

  return {
    paths: slugs,
    fallback: true,
  };
}
