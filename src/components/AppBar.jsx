import { View, StyleSheet, ScrollView } from "react-native";
import Constants from "expo-constants";
import theme from "../theme";
import AppBarTab from "./AppBarTab";
import { useQuery } from "@apollo/client";
import { ME } from "../graphql/queries";
import { useAuthStorage } from "./hooks/useAuthStorage";

import Text from "./Text";
import UserReviews from "./UserReviews";

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.backgroundPrimary,
    display: "flex",
    flexDirection: "row",
  },
  scrollViewStyle: {
    paddingTop: Constants.statusBarHeight,
    display: "flex",
    flexDirection: "row",
    padding: 20,
    gap: 10,
    overflow: "hidden",
    justifyContent: "space-between",
    // ...
  },
  // ...
});

const AppBar = () => {
  const { loading, error, data } = useQuery(ME);
  const { dispatch } = useAuthStorage();
  console.log("ME query on appbar data", data);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={styles.container}>
      <ScrollView horizontal contentContainerStyle={styles.scrollViewStyle}>
        <AppBarTab name="Repositories" path="/" />
        {data.me !== null ? (
          <>
            <AppBarTab name="Create review" path="/createreview" />
            <AppBarTab name="My reviews" path="/userreviews" />
            <AppBarTab
              name="Sign out"
              path="/signin"
              func={() => {
                dispatch({ type: "signOut" });
              }}
            />
          </>
        ) : (
          <>
            <AppBarTab name="Sign up" path="/signup" />
            <AppBarTab name="Sign in" path="/signin" />
          </>
        )}
      </ScrollView>
    </View>
  );
};

export default AppBar;