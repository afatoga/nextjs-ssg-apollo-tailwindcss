import { gql } from "@apollo/client";

export const GET_PAGE_BY_SLUG = gql`
  query GetNodeByUri($uri: String!, $language: LanguageCodeEnum!) {
    nodeByUri(uri: $uri) {
      __typename
      id
      ...Page
    }
  }

  fragment Page on Page {
    title
    content
    date
    translation(language: $language) {
      id
      slug
      content
      title
      language {
        locale
        slug
      }
    }
  }
`;
