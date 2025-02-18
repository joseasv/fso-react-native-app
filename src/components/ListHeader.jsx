import { Picker } from "@react-native-picker/picker";
import { useEffect, useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import { useDebounce } from "use-debounce";
import _default from "@expo/vector-icons/build/Entypo";

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
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {},
});

const ListHeader = ({ updateList }) => {
  //const [visible, setVisible] = useState(false);
  const [filterAndOrder, setFilterAndOrder] = useState({
    principleId: 0,
    searchString: "",
  });
  const [debounceText] = useDebounce(filterAndOrder.searchString, 500);

  useEffect(() => {
    if (debounceText) {
      console.log("debounceText ", debounceText);
      updateList(filterAndOrder);
    } else {
      updateList(filterAndOrder);
    }
  }, [debounceText]);

  const allPrinciples = [
    "Latest repositories",
    "Highest rated repositories",
    "Lowest rated repositories",
  ];

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Entypo
          style={styles.icon}
          name="magnifying-glass"
          size={24}
          color="gray"
        />
        <TextInput
          onChange={(e) => {
            console.log(e.nativeEvent.text);

            setFilterAndOrder({
              ...filterAndOrder,
              searchString: e.nativeEvent.text,
            });
          }}
          style={styles.input}
          color
        />
      </View>

      <Picker
        selectedValue={allPrinciples[filterAndOrder.principleId]}
        onValueChange={(itemValue, itemIndex) => {
          setFilterAndOrder({ ...filterAndOrder, principleId: itemIndex });
          console.log("updating repository list with ", itemValue);
          console.log("with index ", itemIndex);
          updateList(filterAndOrder);
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