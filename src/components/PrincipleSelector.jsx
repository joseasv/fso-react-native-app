import { Picker } from "@react-native-picker/picker";
import { useState } from "react";

/*
 * <Picker
      selectedValue={principle}
      onValueChange={(itemValue, itemIndex) => {
        setPrinciple(itemValue);
        console.log("updating repository list with ", itemValue);

        updateList(itemIndex);
      }}
    >
      {allPrinciples.map((principle, index) => (
        <Picker.Item value={principle} key={index}>
          {principle}
        </Picker.Item>
      ))}
    </Picker>
 */

const PrincipleSelector = ({ updateList }) => {
  //const [visible, setVisible] = useState(false);
  const [principle, setPrinciple] = useState("Latest repositories");
  const allPrinciples = [
    "Latest repositories",
    "Highest rated repositories",
    "Lowest rated repositories",
  ];

  return (
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
  );

  /*const openMenu = () => {
    console.log("Principle selector setting visible to true");
    setVisible(true);
  };

  const closeMenu = () => {
    console.log("Principle selector setting visible to false");
    setVisible(false);
  };

  return (
    <PaperProvider>
      <View
        style={{
          paddingTop: 50,
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <Menu
          visible={visible}
          onDismiss={closeMenu}
          anchor={<Button onPress={openMenu}>Select order...</Button>}
        >
          {allPrinciples.map((principle) => {
            <Menu.Item
              title={principle}
              onPress={(index) => {
                updateList(index);
              }}
            />;
          })}
        </Menu>
      </View>
    </PaperProvider>
  );*/
};

export default PrincipleSelector;