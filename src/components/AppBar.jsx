import { View, StyleSheet } from "react-native";
import Constants from "expo-constants";
import theme from "../theme";
import AppBarTab from "./AppBarTab";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.backgroundPrimary,
    display: "flex",
    flexDirection: "row",

    // ...
  },
  flexText: {
    flexGrow: 1,
    margin: 20,
  },
  // ...
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.flexText}>
        <AppBarTab name="Repositories" />
      </View>
    </View>
  );
};

export default AppBar;