import useRepositories from "./hooks/useRepositories";
import { FlatList, View, StyleSheet } from "react-native";
import RepositoryItem from "./RepositoryItem";

const styles = StyleSheet.create({
  separator: {
    height: 10,
    backgroundColor: "gray",
  },
});

const RepositoryList = () => {
  const { repositories } = useRepositories();
  console.log("Repository list ", repositories);
  // Get the nodes from the edges array
  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  console.log("repository nodes ", repositoryNodes);

  const ItemSeparator = () => <View style={styles.separator} />;

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => (
        <RepositoryItem repositoryData={item} key={item.id} />
      )}
      keyExtractor={(repo) => repo.id}
    />
  );
};

export default RepositoryList;