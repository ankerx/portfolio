import AllProjects from "../components/Projects/AllProjects";
import { gql } from "@apollo/client";
import { GetProjectsQuery } from "../generated/graphql";
import { client } from "../services/apollo";
import { GET_PROJECTS } from "../components/graphql/query.graphql";

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
