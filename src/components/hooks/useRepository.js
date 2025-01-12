import { useQuery } from "@apollo/client";
import { GET_REPOSITORY } from "../../graphql/queries";

const useRepository = (id) => {
  const { data, error, loading } = useQuery(GET_REPOSITORY, {
    fetchPolicy: "cache-and-network",
    variables: { id },
  });

  console.log("useRepository id ", id);
  console.log("useRepository loading ", loading);

  let repository = undefined;

  if (data) {
    console.log("useRepository data", data);
    repository = data.repository;
  }

  if (error) {
    console.log("error", error);
  }

  return { repository, loading };
};

export default useRepository;