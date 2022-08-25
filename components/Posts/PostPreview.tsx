import Image from "next/image";
import Link from "next/link";

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
    <div>
      <Image
        src={post.cover_image?.url || ""}
        width={200}
        height={200}
        alt="blog post"
      />
      <Link href={`/post/${post.slug}`} passHref>
        <h3>{post.title}</h3>
      </Link>
      <p>{post.excerpt}</p>
    </div>
  );
}
