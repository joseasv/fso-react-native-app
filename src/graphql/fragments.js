import { gql } from "@apollo/client";

export const REPOSITORY_DETAILS = gql`
  fragment RepositoryDetails on Repository {
    description
    forksCount
    fullName
    language
    name
    reviewCount
    stargazersCount
    ratingAverage
    ownerAvatarUrl
    id
  }
`;