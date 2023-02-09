import Image from "next/image";
import Link from "next/link";

import {
  H2,
  Paragraph,
  StyledBox,
  StyledText,
  TextContainer,
} from "./styledPosts";

interface IPost {
  post: {
    __typename?: "Post";
    id: string;
    title?: string | null;
    slug?: string | null;
    publishedAt?: any | null;
    excerpt?: string | null;
    author?: string | null;
    content?: {
      __typename?: "RichText";
      html: string;
      markdown: string;
    } | null;
    cover_image?: { __typename?: "Asset"; url: string } | null;
  };
}

export default function PostPreview({ post }: IPost) {
  return (
    <Link href={`/post/${post.slug}`} passHref>
      <StyledBox>
        <Image
          src={post.cover_image?.url || ""}
          width={300}
          height={200}
          objectFit="cover"
          alt="blog post"
        />
        <TextContainer>
          <H2>{post.title}</H2>
          <StyledText>{post.excerpt}</StyledText>
          <Paragraph>Read more</Paragraph>
        </TextContainer>
      </StyledBox>
    </Link>
  );
}
