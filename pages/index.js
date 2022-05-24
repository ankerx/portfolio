import Header from "../components/Header/Header";
import { getPosts } from "../services";
export default function Home({ posts }) {
  console.log(posts);
  return (
    <>
      <Header />
    </>
  );
}

export async function getStaticProps() {
  const posts = await getPosts();

  return {
    props: { posts },
  };
}
