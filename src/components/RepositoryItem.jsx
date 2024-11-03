import { View, StyleSheet } from "react-native";
import RepositoryItemTop from "./RepositoryItemTop";
import RepositoryItemBottom from "./RepositoryItemBottom";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "white",
  },
});

const RepositoryItem = ({ repositoryData }) => {
  //console.log(repositoryData);

  const repoDataTop = {
    fullName: repositoryData.fullName,
    description: repositoryData.description,
    language: repositoryData.language,
    imageUrl: repositoryData.ownerAvatarUrl,
  };

  const repoDataBottom = {
    stars: repositoryData.stargazersCount,
    forks: repositoryData.forksCount,
    reviews: repositoryData.reviewCount,
    rating: repositoryData.ratingAverage,
  };

  return (
    <View style={styles.container}>
      <RepositoryItemTop repoDataTop={repoDataTop} />
      <RepositoryItemBottom repoDataBottom={repoDataBottom} />
    </View>
  );
};

export default RepositoryItem;