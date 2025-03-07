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

export const RepositoryListContainer = ({
  repositories,
  updatePrinciples,
  onEndReach,
}) => {
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
      onEndReached={onEndReach}
      onEndReachedThreshold={0.5}
    />
  );
};

const RepositoryList = () => {
  const [filterAndOrder, setFilterAndOrder] = useState({
    principleId: 0,
    searchString: "",
    pagVariables: {
      first: 8,
    },
  });

  console.log("current filterAndOrder ", filterAndOrder);

  const { repositories, fetchMore } = useRepositories(filterAndOrder);
  //console.log("Repository list ", repositories);
  // Get the nodes from the edges array

  if (repositories !== undefined) {
    console.log("Fetching more ", repositories.edges.length);
  }
  const onEndReach = () => {
    if (repositories !== undefined) {
      console.log("Fetching more ", repositories.edges.length);
    }

    fetchMore();
  };

  return (
    <RepositoryListContainer
      repositories={repositories}
      updatePrinciples={setFilterAndOrder}
      onEndReach={onEndReach}
    />
  );
};

export default RepositoryList;