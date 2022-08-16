import { ApolloClient, InMemoryCache } from "@apollo/client";

const graphqlAPI = process.env.GRAPH_CMS!;

export const client = new ApolloClient({
  uri: graphqlAPI,
  cache: new InMemoryCache(),
});
