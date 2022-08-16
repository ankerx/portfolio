import { request, gql } from "graphql-request";

const graphqlAPI = process.env.GRAPH_CMS!;

export const getPosts = async () => {
  const query = gql`
    query MyQuery {
      projects {
        id
        image {
          url
        }
        description
        link
        liveDemo
      }
    }
  `;

  const results = await request(graphqlAPI, query);
  return results.projects;
};
