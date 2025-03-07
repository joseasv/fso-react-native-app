import { useQuery } from "@apollo/client";
import { GET_REPOSITORY } from "../../graphql/queries";

const useRepository = (variables) => {
  const { data, error, fetchMore, loading, ...result } = useQuery(
    GET_REPOSITORY,
    {
      fetchPolicy: "cache-and-network",
      variables,
    },
  );

  console.log("useRepository variables ", variables);
  console.log("useRepository loading ", loading);

  const handleFetchMore = () => {
    const canFetchMore =
      !loading && data?.repository.reviews.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    }

    fetchMore({
      variables: {
        after: data.repository.reviews.pageInfo.endCursor,
        ...variables,
      },
    });
  };

  if (error) {
    console.log("error", error);
  }

  return {
    repository: data?.repository,
    fetchMore: handleFetchMore,
    loading,
    ...result,
  };
};

export default useRepository;