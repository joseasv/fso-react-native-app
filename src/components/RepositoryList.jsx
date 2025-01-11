import useRepositories from "./hooks/useRepositories";
import { FlatList, View, StyleSheet } from "react-native";
import RepositoryItem from "./RepositoryItem";

const styles = StyleSheet.create({
  separator: {
    height: 10,
    backgroundColor: "gray",
  },
});

export const RepositoryListContainer = ({ repositories }) => {
  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

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

const RepositoryList = () => {
  const { repositories } = useRepositories();
  console.log("Repository list ", repositories);
  // Get the nodes from the edges array

  return <RepositoryListContainer repositories={repositories} />;
};

export default RepositoryList;