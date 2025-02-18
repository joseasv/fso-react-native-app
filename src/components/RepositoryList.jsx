import useRepositories from "./hooks/useRepositories";
import { FlatList, View, StyleSheet } from "react-native";
import RepositoryItem from "./RepositoryItem";
import ListHeader from "./ListHeader";
import { useState } from "react";

const styles = StyleSheet.create({
  separator: {
    height: 10,
    backgroundColor: "gray",
  },
});

export const RepositoryListContainer = ({ repositories, updatePrinciples }) => {
  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  const ItemSeparator = () => <View style={styles.separator} />;

  return (
    <FlatList
      ListHeaderComponent={<ListHeader updateList={updatePrinciples} />}
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
  const [filterAndOrder, setFilterAndOrder] = useState({
    principleId: 0,
    searchString: "",
  });

  const { repositories } = useRepositories(filterAndOrder);
  console.log("Repository list ", repositories);
  // Get the nodes from the edges array

  return (
    <RepositoryListContainer
      repositories={repositories}
      updatePrinciples={setFilterAndOrder}
    />
  );
};

export default RepositoryList;