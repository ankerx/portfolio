import { GetPostsQuery } from "../../generated/graphql";
import {
  BackgroundGradientBottom,
  BackgroundGradientTop,
  Section,
} from "../../styles/globalStyles";
import Post from "./Post";

export default function AllPosts({ posts }: GetPostsQuery) {
  return (
    <Section>
      {posts.map((post) => {
        return (
          <Post
            slug={post.slug}
            key={post.id}
            text={{ __html: post.content?.html || "" }}
          />
        );
      })}
      <BackgroundGradientBottom />
      <BackgroundGradientTop />
    </Section>
  );
}
