import { View, StyleSheet, Pressable } from "react-native";
import RepositoryItemTop from "./RepositoryItemTop";
import RepositoryItemBottom from "./RepositoryItemBottom";
import { useNavigate } from "react-router-native";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "white",
  },
});

const RepositoryItem = ({ repositoryData }) => {
  //console.log(repositoryData);
  const navigate = useNavigate();

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
    <View testID="repositoryItem" style={styles.container}>
      <Pressable
        onPress={() => {
          console.log("pressing on ", repositoryData.fullName);
          navigate(`/${repositoryData.id}`);
        }}
      >
        <RepositoryItemTop repoDataTop={repoDataTop} />
        <RepositoryItemBottom repoDataBottom={repoDataBottom} />
      </Pressable>
    </View>
  );
};

export default RepositoryItem;