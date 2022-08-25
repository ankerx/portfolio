import { NextPage } from "next";
import AllProjects from "../components/Projects/AllProjects";
import { GetProjectsQuery } from "../generated/graphql";
import { client } from "../graphql/apollo";
import { GET_PROJECTS } from "../graphql/query.graphql";

function Projects({ projects }: GetProjectsQuery) {
  return (
    <>
      <AllProjects projects={projects} />
    </>
  );
}

export default Projects;

export async function getStaticProps() {
  const {
    data: { projects },
  } = await client.query<GetProjectsQuery>({
    query: GET_PROJECTS,
  });

  return {
    props: { projects },
  };
}
