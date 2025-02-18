import { Picker } from "@react-native-picker/picker";
import { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import Icon from "@react-native-vector-icons/fontawesome6";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    gap: 4,
    padding: 10,
  },
  input: {
    borderWidth: 1,
    borderRadius: 5,
    fontSize: 18,
    backgroundColor: "white",

    flex: 1,
  },
  inputContainer: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "#000",
    paddingBottom: 10,
    alignItems: "center",
  },
});

const ListHeader = ({ updateList }) => {
  //const [visible, setVisible] = useState(false);
  const [principle, setPrinciple] = useState("Latest repositories");
  const allPrinciples = [
    "Latest repositories",
    "Highest rated repositories",
    "Lowest rated repositories",
  ];

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Icon name="magnifying-glass" />
        <TextInput style={styles.input} color />
      </View>

      <Picker
        selectedValue={principle}
        onValueChange={(itemValue, itemIndex) => {
          setPrinciple(itemValue);
          console.log("updating repository list with ", itemValue);
          console.log("with index ", itemIndex);
          updateList(itemIndex);
        }}
      >
        {allPrinciples.map((principle, index) => (
          <Picker.Item value={principle} key={index} label={principle} />
        ))}
      </Picker>
    </View>
  );
};

export default ListHeader;