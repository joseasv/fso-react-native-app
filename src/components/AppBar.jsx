import { View, StyleSheet, Pressable } from "react-native";
import Text from "./Text";
import Constants from "expo-constants";
import theme from "../theme";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.textSecondary,
    // ...
  },
  // ...
});

const AppBar = () => {
  return (
    <Pressable onPress={() => {}}>
      <View style={styles.container}>
        <Text fontWeight="bold" fontSize="subheading">
          Repositories
        </Text>
      </View>
    </Pressable>
  );
};

export default AppBar;