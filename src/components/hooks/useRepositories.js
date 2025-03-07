import { useQuery } from "@apollo/client";
import { GET_REPOSITORIES } from "../../graphql/queries";

const allPrinciples = [
  {
    orderBy: "CREATED_AT",
    orderDirection: "DESC",
    name: "Latest repositories",
  },
  {
    orderBy: "RATING_AVERAGE",
    orderDirection: "DESC",
    name: "Highest rated repositories",
  },
  {
    orderBy: "RATING_AVERAGE",
    orderDirection: "ASC",
    name: "Lowest rated repositories",
  },
];

const useRepositories = ({ principleId, searchString, pagVariables }) => {
  const { data, error, loading, fetchMore, ...result } = useQuery(
    GET_REPOSITORIES,
    {
      fetchPolicy: "cache-and-network",
      variables: {
        ...allPrinciples[principleId],
        searchKeyword: searchString,
        ...pagVariables,
      },
    },
  );

  console.log(
    "querying allrepositories with principleId and searchString ",
    principleId,
    searchString,
    pagVariables,
  );

  const handleFetchMore = () => {
    const canFetchMore = !loading && data?.repositories.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    }

    fetchMore({
      variables: {
        after: data.repositories.pageInfo.endCursor,
        ...pagVariables,
      },
    });
  };

  console.log("useRepositories loading ", loading);

  let repositories = undefined;

  if (data) {
    //console.log("data", data);
    repositories = data.repositories;
  }

  if (error) {
    console.log("error", error);
  }

  return {
    repositories: data?.repositories,
    fetchMore: handleFetchMore,
    loading,
    ...result,
  };
};

export default useRepositories;