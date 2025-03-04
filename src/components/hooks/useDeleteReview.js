import { useMutation } from "@apollo/client";
import { DELETE_REVIEW } from "../../graphql/mutations";
import { ME } from "../../graphql/queries";

const useDeleteReview = (refetchMeQuery) => {
  const [mutate, result] = useMutation(DELETE_REVIEW, {
    refetchQueries: [ME],
  });

  console.log("creating delete review async call");

  const deleteReview = async (id) => {
    console.log("deleting review id", id);
    const deleteReviewId = { id };

    const { data } = await mutate({ variables: { deleteReviewId: id } });
    if (refetchMeQuery) {
      refetchMeQuery();
    }
    console.log("data after deleting review ", data);

    return data;
  };

  return [deleteReview, result];
};

export default useDeleteReview;