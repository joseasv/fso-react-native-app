import { useMutation } from "@apollo/client";
import { AUTHENTICATE } from "../../graphql/mutations";
import { useAuthStorage } from "./useAuthStorage";

const useSignIn = () => {
  const [mutate, result] = useMutation(AUTHENTICATE);
  const { dispatch } = useAuthStorage();

  const signIn = async ({ username, password }) => {
    // call the mutate function here with the right arguments
    console.log("signIn", username, password);
    const credentials = { username, password };
    const { data } = await mutate({ variables: { credentials } });
    //console.log("accesstoken in usesignin", data.authenticate.accessToken);
    dispatch({ type: "signIn", payload: data.authenticate.accessToken });
  };

  return [signIn, result];
};

export default useSignIn;