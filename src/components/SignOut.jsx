import { useAuthStorage } from "./hooks/useAuthStorage";
import { useNavigate } from "react-router-native";
import Text from "./Text";

const SignOut = () => {
  const { dispatch } = useAuthStorage();
  const navigate = useNavigate();

  dispatch({ type: "signOut" });
  return (
    <>
      <Text>Please sign in</Text>
    </>
  );
};

export default SignOut;