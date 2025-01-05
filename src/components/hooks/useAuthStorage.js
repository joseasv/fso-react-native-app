import { useContext, useReducer } from "react";
import AuthStorageContext from "../../contexts/AuthStorageContext";

let authStorageAS = undefined;
let apolloClientAS = undefined;

const authStorageReducer = async (state, action) => {
  console.log(state);
  console.log(action);
  switch (action.type) {
    case "signIn": {
      console.log("SIGNIN");

      await authStorageAS.setAccessToken(action.payload);
      console.log(state);
      console.log("ADDED ACCESS TOKEN");
      apolloClientAS.resetStore();
      return { ...state };
    }

    case "signOut": {
      console.log("SIGNOUT");
      await authStorageAS.removeAccessToken();
      console.log("REMOVED ACCESS TOKEN");
      apolloClientAS.resetStore();
      return { ...state };
    }
  }
};

const AuthStorageProvider = ({ children, authStorage, apolloClient }) => {
  const initState = {
    authStorage,
    apolloClient,
  };

  authStorageAS = authStorage;
  apolloClientAS = apolloClient;

  const [state, dispatch] = useReducer(authStorageReducer, {});

  console.log("initState", initState);

  const value = { state, dispatch };

  return (
    <AuthStorageContext.Provider value={value}>
      {children}
    </AuthStorageContext.Provider>
  );
};

const useAuthStorage = () => {
  const context = useContext(AuthStorageContext);
  console.log("context", context);
  if (context === undefined) {
    throw new Error("useAuthStorage must be used within a AuthStorageProvider");
  }

  return context;
};

export { AuthStorageProvider, useAuthStorage };