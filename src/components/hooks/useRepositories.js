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

const useRepositories = (principleId) => {
  const { data, error, loading } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: "cache-and-network",
    variables: allPrinciples[principleId],
  });

  console.log(
    "querying allrepositories with principle ",
    allPrinciples[principleId],
  );

  console.log("useRepositories loading ", loading);

  let repositories = undefined;

  if (data) {
    //console.log("data", data);
    repositories = data.repositories;
  }

  if (error) {
    console.log("error", error);
  }

  return { repositories, loading };
};

export default useRepositories;