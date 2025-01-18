import { useMutation } from "@apollo/client";
import { CREATE_REVIEW } from "../../graphql/mutations";

const useCreateReview = () => {
  const [mutate, result] = useMutation(CREATE_REVIEW);

  const createReview = async ({ ownerName, repositoryName, rating, text }) => {
    const createReviewInput = {
      review: { ownerName, repositoryName, rating, text },
    };
    console.log("useCreateReview createReview", createReviewInput);

    const { data } = await mutate({ variables: createReviewInput });
    console.log("useCreateReview  data", data.repositoryId);
    return data;
  };

  return [createReview, result];
};

export default useCreateReview;