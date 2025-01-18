import { TextInput, View, Pressable } from "react-native";
import { useNavigate } from "react-router-native";
import { useFormik } from "formik";
import Text from "./Text";
import theme from "../theme";
import * as yup from "yup";
import useCreateReview from "./hooks/useCreateReview";
import { StyleSheet } from "react-native";

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
  ownerName: yup.string().required("Repository owner username is required"),
  repositoryName: yup.string().required("Repository name is required"),
  rating: yup.number().required("Rating is required"),
  text: yup.string(),
});

const initialValues = {
  ownerName: "",
  repositoryName: "",
  rating: "",
  text: "",
};

const ReviewFormContainer = ({ onSubmit }) => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <View style={styles.container}>
      <TextInput
        style={formik.errors.ownerName ? styles.errorInput : styles.input}
        placeholder="Repository owner username"
        value={formik.values.ownerName}
        onChangeText={formik.handleChange("ownerName")}
      />
      {formik.touched.ownerName && formik.errors.ownerName && (
        <Text style={{ color: theme.colors.error }}>
          {formik.errors.ownerName}
        </Text>
      )}
      <TextInput
        style={formik.errors.repositoryName ? styles.errorInput : styles.input}
        placeholder="Repository name"
        value={formik.values.repositoryName}
        onChangeText={formik.handleChange("repositoryName")}
      />
      {formik.touched.repositoryName && formik.errors.repositoryName && (
        <Text style={{ color: theme.colors.error }}>
          {formik.errors.repositoryName}
        </Text>
      )}
      <TextInput
        style={formik.errors.rating ? styles.errorInput : styles.input}
        placeholder="Rating between 0 and 100"
        value={formik.values.rating}
        onChangeText={formik.handleChange("rating")}
      />
      {formik.touched.rating && formik.errors.rating && (
        <Text style={{ color: theme.colors.error }}>
          {formik.errors.rating}
        </Text>
      )}
      <TextInput
        style={formik.errors.review ? styles.errorInput : styles.input}
        placeholder="Review"
        value={formik.values.text}
        multiline
        onChangeText={formik.handleChange("text")}
      />
      <Pressable onPress={formik.handleSubmit} style={styles.submitButton}>
        <Text color="textSecondary" fontSize="subheading" fontWeight="bold">
          Create review
        </Text>
      </Pressable>
    </View>
  );
};

const ReviewForm = () => {
  const [createReview] = useCreateReview();
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    const { ownerName, repositoryName, rating, text } = values;
    console.log("ReviewForm onSubmit values", values);
    const ratingNumber = parseInt(rating);

    try {
      const data = await createReview({
        ownerName,
        repositoryName,
        rating: ratingNumber,
        text,
      });
      console.log("ReviewForm repositoryId ", data);
      navigate(`/${data.createReview.repositoryId}`);
    } catch (e) {
      console.log(e);
    }
  };

  return <ReviewFormContainer onSubmit={onSubmit} />;
};

export default ReviewForm;