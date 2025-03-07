import RepositoryItemTop from "./RepositoryItemTop";
import RepositoryItemBottom from "./RepositoryItemBottom";
import useRepository from "./hooks/useRepository";
import { View, StyleSheet, Pressable, FlatList } from "react-native";
import { useParams } from "react-router-native";
import Text from "./Text";
import theme from "../theme";
import { openURL } from "expo-linking";
import ReviewItem from "./ReviewItem";

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
  separator: {
    height: 10,
    backgroundColor: "gray",
  },
});

const RepositoryInfo = ({ repository }) => {
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
          <Text
            fontSize="subheading"
            fontWeight="bold"
            style={styles.openInGitHubLinkText}
            color="textSecondary"
          >
            Open in GitHub
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

const SingleRepository = () => {
  const { id } = useParams();
  console.log("repository view with id ", id);
  const { repository, loading, fetchMore } = useRepository({ id, first: 6 });
  console.log("repository", repository);

  if (!loading) {
    const reviews = repository
      ? repository.reviews.edges.map((edge) => edge.node)
      : [];

    console.log("reviews ", reviews);

    const onEndReach = () => {
      fetchMore();
    };

    const ItemSeparator = () => <View style={styles.separator} />;

    return (
      <FlatList
        data={reviews}
        keyExtractor={({ id }) => id}
        ListHeaderComponent={() => <RepositoryInfo repository={repository} />}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={({ item }) => <ReviewItem review={item} />}
        onEndReached={onEndReach}
        onEndReachedThreshold={0.5}
      />
    );
  } else {
    <Text>Loading...</Text>;
  }
};

export default SingleRepository;
