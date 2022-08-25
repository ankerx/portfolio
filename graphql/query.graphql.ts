import { gql } from "@apollo/client";
export const GET_PROJECTS = gql`
  query GetProjects {
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
export const GET_POSTS = gql`
  query GetPosts {
    posts {
      id
      title
      slug
      publishedAt
      content {
        html
        markdown
      }
      cover_image {
        url
      }
      excerpt
      author
    }
  }
`;
export const GET_SINGLE_POST = gql`
  query GetSinglePost($slug: String!) {
    post(where: { slug: $slug }) {
      author
      cover_image {
        url
      }
      slug
      title
      excerpt
      createdAt
      content {
        markdown
      }
    }
  }
`;
