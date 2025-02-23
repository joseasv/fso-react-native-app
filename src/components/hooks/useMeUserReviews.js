import { useQuery } from "@apollo/client";
import { ME } from "../../graphql/queries";

const useMeUserReviews = () => {
  const { loading, error, data } = useQuery(ME, {
    variables: { includeReviews: true },
  });

  let reviews = undefined;

  if (data) {
    const reviewNodes = data.me.reviews;
    reviews = reviewNodes ? reviewNodes.edges.map((edge) => edge.node) : [];
  }

  return { reviews, loading };
};

export default useMeUserReviews;