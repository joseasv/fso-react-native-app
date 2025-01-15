import { View } from "react-native";
import Text from "./Text";
import { StyleSheet } from "react-native";
import theme from "../theme";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "white",
    overflow: "hidden",
    justifyContent: "space-around",
    margin: 10,
  },
  flexItem: {
    flexBasis: "auto",
    display: "flex",
    flexDirection: "column",
    flexGrow: 0,
  },
});

const RepositoryItemBottom = ({ repoDataBottom }) => {
  const shownStars =
    repoDataBottom.stars > 1000
      ? Math.round((repoDataBottom.stars / 1000) * 10) / 10 + "k"
      : repoDataBottom.stars;

  const shownForks =
    repoDataBottom.forks > 1000
      ? Math.round((repoDataBottom.forks / 1000) * 10) / 10 + "k"
      : repoDataBottom.forks;

  const shownReviews =
    repoDataBottom.reviews > 1000
      ? Math.round((repoDataBottom.reviews / 1000) * 10) / 10 + "k"
      : repoDataBottom.reviews;

  return (
    <View style={styles.container}>
      <View style={styles.flexItem}>
        <Text fontWeight="bold" fontSize="subheading">
          {shownStars}
        </Text>
        <Text fontSize="subheading">Stars</Text>
      </View>
      <View style={styles.flexItem}>
        <Text fontWeight="bold" fontSize="subheading">
          {shownForks}
        </Text>
        <Text fontSize="subheading">Forks</Text>
      </View>
      <View style={styles.flexItem}>
        <Text fontWeight="bold" fontSize="subheading">
          {shownReviews}
        </Text>
        <Text fontSize="subheading">Reviews</Text>
      </View>
      <View style={styles.flexItem}>
        <Text fontWeight="bold" fontSize="subheading">
          {repoDataBottom.rating}
        </Text>
        <Text fontSize="subheading">Rating</Text>
      </View>
    </View>
  );
};

export default RepositoryItemBottom;