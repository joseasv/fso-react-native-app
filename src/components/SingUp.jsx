import * as yup from "yup";
import Text from "./Text";
import { TextInput, Pressable, View } from "react-native";
import { useFormik } from "formik";
import { StyleSheet } from "react-native";
import theme from "../theme";
import useSignIn from "./hooks/useSignIn";
import useSignUp from "./hooks/useSignUp";
import { useNavigate } from "react-router-native";

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
  username: yup.string().min(5).max(30).required("Username is required"),
  password: yup.string().min(5).max(50).required("Password is required"),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref("password")])
    .required("Password confirmation is required"),
});

const initialValues = {
  username: "",
  password: "",
  passwordConfirmation: "",
};

export const SignUpContainer = ({ onSubmit }) => {
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
        onChangeText={formik.handleChange("password")}
      />
      {formik.touched.password && formik.errors.password && (
        <Text style={{ color: theme.colors.error }}>
          {formik.errors.password}
        </Text>
      )}
      <TextInput
        style={formik.errors.username ? styles.errorInput : styles.input}
        placeholder="Password confirmation"
        value={formik.values.passwordConfirmation}
        onChangeText={formik.handleChange("passwordConfirmation")}
      />
      {formik.touched.passwordConfirmation &&
        formik.errors.passwordConfirmation && (
          <Text style={{ color: theme.colors.error }}>
            {formik.errors.passwordConfirmation}
          </Text>
        )}
      <Pressable onPress={formik.handleSubmit} style={styles.submitButton}>
        <Text color="textSecondary" fontSize="subheading" fontWeight="bold">
          Sign up
        </Text>
      </Pressable>
    </View>
  );
};

const SignUp = () => {
  const [signIn] = useSignIn();
  const [signUp] = useSignUp();
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    const { username, password } = values;
    console.log(values);

    try {
      await signUp({ username, password });
      await signIn({ username, password });
      navigate("/");
    } catch (e) {
      console.log(e);
    }
  };
  return <SignUpContainer onSubmit={onSubmit} />;
};

export default SignUp;