import { Text, View } from "react-native";

const RepositoryItem = ({ repositoryData }) => {
  //console.log(repositoryData);

  return (
    <View>
      <Text>Full name: {repositoryData.fullName} </Text>
      <Text>Description: {repositoryData.description} </Text>
      <Text>Language: {repositoryData.language} </Text>
      <Text>Stars: {repositoryData.stargazersCount} </Text>
      <Text>Forks: {repositoryData.forksCount} </Text>
      <Text>Reviews: {repositoryData.reviewCount} </Text>
      <Text>Rating: {repositoryData.ratingAverage} </Text>
    </View>
  );
};

export default RepositoryItem;