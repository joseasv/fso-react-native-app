import * as yup from "yup";
import Text from "./Text";
import { TextInput, Pressable, View } from "react-native";
import { useFormik } from "formik";
import { StyleSheet } from "react-native";
import theme from "../theme";
import useSignIn from "./hooks/useSignIn";
import { useNavigate } from "react-router-native";
//import useAuthStorage from "./hooks/useAuthStorage";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
    padding: 10,
    gap: 15,
    justifyContent: "space-between",
  },
  input: {
    padding: 18,
    borderWidth: 1,
    borderRadius: 5,
    fontSize: 18,
  },
  errorInput: {
    padding: 18,
    borderWidth: 1,
    borderRadius: 5,
    fontSize: 18,
    borderColor: theme.colors.error,
  },
  submitButton: {
    flexDirection: "row",
    borderRadius: 5,
    padding: 18,
    justifyContent: "center",
    backgroundColor: theme.colors.primary,
  },
  // ...
});

const validationSchema = yup.object().shape({
  username: yup.string().required("Username is required"),
  password: yup.string().required("Password is required"),
});

const initialValues = {
  username: "",
  password: "",
};

export const SignInContainer = ({ onSubmit }) => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <View style={styles.container}>
      <TextInput
        style={formik.errors.username ? styles.errorInput : styles.input}
        placeholder="Username"
        value={formik.values.username}
        onChangeText={formik.handleChange("username")}
      />
      {formik.touched.username && formik.errors.username && (
        <Text style={{ color: theme.colors.error }}>
          {formik.errors.username}
        </Text>
      )}
      <TextInput
        style={formik.errors.password ? styles.errorInput : styles.input}
        placeholder="Password"
        value={formik.values.password}
        secureTextEntry
        onChangeText={formik.handleChange("password")}
      />
      {formik.touched.password && formik.errors.password && (
        <Text style={{ color: theme.colors.error }}>
          {formik.errors.password}
        </Text>
      )}
      <Pressable onPress={formik.handleSubmit} style={styles.submitButton}>
        <Text color="textSecondary" fontSize="subheading" fontWeight="bold">
          Sign in
        </Text>
      </Pressable>
    </View>
  );
};

const SignIn = () => {
  const [signIn] = useSignIn();
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    const { username, password } = values;
    console.log(values);

    try {
      await signIn({ username, password });
      navigate("/");
    } catch (e) {
      console.log(e);
    }
  };

  return <SignInContainer onSubmit={onSubmit} />;
};

export default SignIn;