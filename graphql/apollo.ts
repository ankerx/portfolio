import { ApolloClient, InMemoryCache } from "@apollo/client";

const graphqlAPI = process.env.GRAPH_CMS!;

export const client = new ApolloClient({
  uri: "https://api-eu-central-1.graphcms.com/v2/cl3k3iamy9a4801zdehnbhmqw/master",
  cache: new InMemoryCache(),
});
