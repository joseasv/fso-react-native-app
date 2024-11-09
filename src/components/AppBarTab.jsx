import { Link } from "react-router-native";
import Text from "./Text";
import { Pressable } from "react-native";

const AppBarTab = ({ name, path }) => {
  return (
    <Pressable
      onPress={() => {
        console.log("pressing ", name);
      }}
    >
      <Link to={path}>
        <Text fontSize="subheading" color="textSecondary">
          {name}
        </Text>
      </Link>
    </Pressable>
  );
};

export default AppBarTab;