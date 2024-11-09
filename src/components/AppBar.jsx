import { View, StyleSheet, ScrollView } from "react-native";
import Constants from "expo-constants";
import theme from "../theme";
import AppBarTab from "./AppBarTab";

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.backgroundPrimary,
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
  return (
    <View style={styles.container}>
      <ScrollView horizontal contentContainerStyle={styles.scrollViewStyle}>
        <AppBarTab name="Repositories" path="/" />
        <AppBarTab name="Sign in" path="/signin" />
      </ScrollView>
    </View>
  );
};

export default AppBar;