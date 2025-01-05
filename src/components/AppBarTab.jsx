import { Link } from "react-router-native";
import Text from "./Text";

const AppBarTab = ({ name, path, func }) => {
  return (
    <Link
      to={path}
      onPress={() => {
        console.log("pressing ", name);
        if (func) {
          console.log("executing FUNC");
          func();
        }
      }}
    >
      <Text fontSize="subheading" color="textSecondary">
        {name}
      </Text>
    </Link>
  );
};

export default AppBarTab;