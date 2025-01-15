import { View } from "react-native";
import Text from "./Text";
import { StyleSheet } from "react-native";
import theme from "../theme";
import { Image } from "react-native";

const styles = StyleSheet.create({
  mainContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 8,
    gap: 10,
  },
  container: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "white",
    gap: 4,
    //overflow: "hidden",
    flexGrow: 1,
    //padding: 5,
  },
  image: {
    width: 40,
    height: 40,
    flexGrow: 0,
    margin: 5,
    //flexBasis: "auto",
    borderRadius: 6,
  },
  languageFlexItem: {
    //flexBasis: "auto",
    //margin: "auto",
    alignSelf: "flex-start",
    backgroundColor: theme.colors.primary,
    borderRadius: 6,
    padding: 4,
    flexGrow: 1,
  },
  fullNameFlexItem: {
    flexGrow: 1,
  },
  descriptionFlexItem: {
    flexGrow: 1,
  },
});

const RepositoryItemTop = ({ repoDataTop }) => {
  return (
    <View style={styles.mainContainer}>
      <Image style={styles.image} source={{ uri: repoDataTop.imageUrl }} />
      <View style={styles.container}>
        <View style={styles.fullNameFlexItem}>
          <Text fontWeight="bold" fontSize="subheading">
            {repoDataTop.fullName}
          </Text>
        </View>
        <View style={styles.descriptionFlexItem}>
          <Text color="secondaryColor" fontSize="subheading">
            {repoDataTop.description}{" "}
          </Text>
        </View>
        <View style={styles.languageFlexItem}>
          <Text color="textSecondary" fontSize="subheading">
            {repoDataTop.language}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default RepositoryItemTop;