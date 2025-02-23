import { View, StyleSheet } from "react-native";
import Text from "./Text";
import theme from "../theme";
import { format } from "date-fns";

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
});

const ReviewItem = ({ review }) => {
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
      </View>
    </View>
  );
};

export default ReviewItem;