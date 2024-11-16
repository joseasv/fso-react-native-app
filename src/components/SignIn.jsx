import Text from "./Text";
import { TextInput, Pressable, View } from "react-native";
import { useFormik } from "formik";
import { StyleSheet } from "react-native";
import theme from "../theme";

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
  submitButton: {
    flexDirection: "row",
    borderRadius: 5,
    padding: 18,
    justifyContent: "center",
    backgroundColor: theme.colors.primary,
  },
  // ...
});

const initialValues = {
  username: "",
  password: "",
};

const SignIn = () => {
  const onSubmit = (values) => {
    console.log(values);
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
  });

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={formik.values.username}
        onChangeText={formik.handleChange("username")}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={formik.values.password}
        secureTextEntry
        onChangeText={formik.handleChange("password")}
      />
      <Pressable onPress={formik.handleSubmit} style={styles.submitButton}>
        <Text color="textSecondary" fontSize="subheading" fontWeight="bold">
          Sign in
        </Text>
      </Pressable>
    </View>
  );
};

export default SignIn;