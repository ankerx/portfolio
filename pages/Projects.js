import MyProjects from "../components/Projects/MyProjects";
import { getPosts } from "../services";
function Projects({ posts }) {
  console.log(posts);
  return (
    <div>
      <MyProjects posts={posts} />
    </div>
  );
}

export default Projects;

export async function getStaticProps() {
  const posts = await getPosts();

  return {
    props: { posts },
  };
}
