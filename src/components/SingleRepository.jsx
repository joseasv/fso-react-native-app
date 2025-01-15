import RepositoryItemTop from "./RepositoryItemTop";
import RepositoryItemBottom from "./RepositoryItemBottom";
import useRepository from "./hooks/useRepository";
import { View, StyleSheet, Pressable, FlatList } from "react-native";
import { useParams } from "react-router-native";
import Text from "./Text";
import theme from "../theme";
import { openURL } from "expo-linking";
import { format } from "date-fns";

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

const ReviewItem = ({ review }) => {
  console.log(review);

  return (
    <View style={styles.reviewContainer}>
      <Text fontSize="subheading" fontWeight="bold" style={styles.reviewRating}>
        {review.rating}
      </Text>
      <View>
        <Text fontWeight="bold" fontSize="subheading">
          {review.user.username}
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

const SingleRepository = () => {
  const { id } = useParams();
  console.log("repository view with id ", id);
  const { repository, loading } = useRepository(id);
  console.log("repository", repository);

  if (!loading) {
    const reviews = repository.reviews
      ? repository.reviews.edges.map((edge) => edge.node)
      : [];

    console.log("reviews ", reviews);
    const ItemSeparator = () => <View style={styles.separator} />;

    return (
      <FlatList
        data={reviews}
        keyExtractor={({ id }) => id}
        ListHeaderComponent={() => <RepositoryInfo repository={repository} />}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={({ item }) => <ReviewItem review={item} />}
      />
    );
  } else {
    <Text>Loading...</Text>;
  }
};

export default SingleRepository;
