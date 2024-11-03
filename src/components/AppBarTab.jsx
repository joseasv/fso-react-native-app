import Text from "./Text";
import { Pressable } from "react-native";

const AppBarTab = ({ name }) => {
  return (
    <Pressable onPress={() => {}}>
      <Text fontSize="subheading" color="textSecondary">
        {name}
      </Text>
    </Pressable>
  );
};

export default AppBarTab;