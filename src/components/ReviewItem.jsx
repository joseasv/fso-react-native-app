import { View, StyleSheet } from "react-native";
import Text from "./Text";
import theme from "../theme";
import { format } from "date-fns";
import { Pressable } from "react-native";
import { useNavigate } from "react-router-native";
import { Alert } from "react-native";
import useDeleteReview from "./hooks/useDeleteReview";

const styles = StyleSheet.create({
  reviewContainer: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "white",
    padding: 10,
    //gap: 10,
  },
  reviewRating: {
    marginRight: 8,
    padding: 12,
    borderStyle: "solid",
    borderColor: theme.colors.primary,
    color: theme.colors.primary,
    borderWidth: 3,
    width: 50,
    height: 50,
    borderRadius: 56 / 2,
    textAlign: "center",
    flexWrap: "nowrap",
    display: "flex",
    //alignItems: "flex-start",
  },
  reviewContent: {
    display: "flex",
    flexDirection: "column",
    columnGap: 30,
  },
  reviewCreatedAt: {
    color: "gray",
  },
  reviewTextContainer: {
    display: "flex",

    width: 350,
    //textAlign: "justify",
  },
  reviewText: {
    //flex: 1,
  },
  buttonsContainer: {
    display: "flex",
    flexDirection: "row",
    alignContent: "space-around",
  },
  viewRepoButton: {
    backgroundColor: theme.colors.primary,
    borderRadius: 6,
    padding: 4,
    margin: 10,
  },
  buttonText: {
    alignSelf: "center",
    margin: 10,
  },
  deleteReviewButton: {
    backgroundColor: theme.colors.error,
    borderRadius: 6,
    padding: 4,
    margin: 10,
  },
});

const ReviewItem = ({ review, refetch }) => {
  const navigate = useNavigate();
  const [deleteReview] = useDeleteReview(refetch);
  console.log(review);

  const subheadingText =
    review.user !== undefined
      ? review.user.username
      : review.repository.fullName;

  return (
    <View style={styles.reviewContainer}>
      <Text fontSize="subheading" fontWeight="bold" style={styles.reviewRating}>
        {review.rating}
      </Text>
      <View>
        <Text fontWeight="bold" fontSize="subheading">
          {subheadingText}
        </Text>
        <Text fontSize="subheading" style={styles.reviewCreatedAt}>
          {format(review.createdAt, "dd.MM.yyyy")}
        </Text>
        <View style={styles.reviewTextContainer}>
          <Text fontSize="subheading" style={styles.reviewText}>
            {review.text}
          </Text>
        </View>
        {review.user === undefined && (
          <View style={styles.buttonsContainer}>
            <Pressable
              onPress={() => {
                console.log(
                  "going to ",
                  review.repository.id,
                  review.repositoryId,
                );
                navigate(`/${review.repositoryId}`);
              }}
            >
              <View style={styles.viewRepoButton}>
                <Text
                  style={styles.buttonText}
                  color="textSecondary"
                  fontWeight="bold"
                >
                  View repository
                </Text>
              </View>
            </Pressable>
            <Pressable
              onPress={() => {
                Alert.alert(
                  "Delete review",
                  "Are you sure you want to delete this review?",
                  [
                    {
                      text: "CANCEL",
                      onPress: () => console.log("Cancel Pressed"),
                      style: "cancel",
                    },
                    {
                      text: "DELETE",
                      onPress: () => {
                        console.log("delete ", review.id);
                        deleteReview(review.id);
                      },
                    },
                  ],
                );
              }}
            >
              <View style={styles.deleteReviewButton}>
                <Text
                  style={styles.buttonText}
                  color="textSecondary"
                  fontWeight="bold"
                >
                  Delete review
                </Text>
              </View>
            </Pressable>
          </View>
        )}
      </View>
    </View>
  );
};

export default ReviewItem;