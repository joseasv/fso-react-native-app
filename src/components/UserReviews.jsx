import { FlatList, StyleSheet } from "react-native";
import ReviewItem from "./ReviewItem";
import useMeUserReviews from "./hooks/useMeUserReviews";
import { View } from "react-native";

const styles = StyleSheet.create({
  separator: {
    height: 10,
    backgroundColor: "gray",
  },
});

const UserReviews = () => {
  const { reviews, refetch } = useMeUserReviews();
  console.log("UserReviews reviews ", reviews);
  const ItemSeparator = () => <View style={styles.separator} />;

  return (
    <FlatList
      data={reviews}
      keyExtractor={({ id }) => id}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => <ReviewItem review={item} refetch={refetch} />}
    />
  );
};

export default UserReviews;