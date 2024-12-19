import { useQuery } from "@apollo/client";
import { GET_REPOSITORIES } from "../../graphql/queries";

const useRepositories = () => {
  const { data, error, loading } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: "cache-and-network",
  });

  console.log(loading);

  let repositories = undefined;

  if (data) {
    console.log("data", data);
    repositories = data.repositories;
  }

  if (error) {
    console.log("error", error);
  }

  return { repositories, loading };
};

export default useRepositories;