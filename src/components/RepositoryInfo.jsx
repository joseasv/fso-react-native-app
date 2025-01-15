import RepositoryItemTop from "./RepositoryItemTop";
import RepositoryItemBottom from "./RepositoryItemBottom";
import useRepository from "./hooks/useRepository";
import { View, StyleSheet, Pressable } from "react-native";
import { useParams } from "react-router-native";
import Text from "./Text";
import theme from "../theme";
import { openURL } from "expo-linking";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "white",
  },
  openInGitHubLink: {
    backgroundColor: theme.colors.primary,
    borderRadius: 6,
    padding: 4,
    margin: 10,
    flexGrow: 0,
  },
  openInGitHubLinkText: {
    alignSelf: "center",
    margin: 10,
  },
});

const RepositoryInfo = () => {
  const { id } = useParams();
  console.log("repository view with id ", id);
  const { repository, loading } = useRepository(id);
  console.log("repository", repository);

  if (!loading) {
    const repoDataTop = {
      fullName: repository.fullName,
      description: repository.description,
      language: repository.language,
      imageUrl: repository.ownerAvatarUrl,
    };

    const repoDataBottom = {
      stars: repository.stargazersCount,
      forks: repository.forksCount,
      reviews: repository.reviewCount,
      rating: repository.ratingAverage,
    };
    return (
      <View testID="repositoryItem" style={styles.container}>
        <RepositoryItemTop repoDataTop={repoDataTop} />
        <RepositoryItemBottom repoDataBottom={repoDataBottom} />
        <Pressable
          onPress={() => {
            openURL(repository.url);
          }}
        >
          <View style={styles.openInGitHubLink}>
            <Text style={styles.openInGitHubLinkText} color="textSecondary">
              Open in GitHub
            </Text>
          </View>
        </Pressable>
      </View>
    );
  } else {
    <Text>Loading...</Text>;
  }
};

export default RepositoryInfo;
