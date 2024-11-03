import { Text, StyleSheet, View } from "react-native";
import theme from "../theme";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: theme.colors.backgroundSecondary,
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <Text>Rate Repository Application for super players</Text>
    </View>
  );
};

export default Main;