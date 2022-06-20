import React from "react";
import { Button, Text, View, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import { editSampler } from "../../store/reducer";

const SamplerEdit = ({ item, navigation}) => {

  const dispatch = useDispatch();

  const edit = () => {
    dispatch(editSampler({id: id, item:item}));
    navigation.pop();
  };
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{item.name}</Text>
      <Button onPress={edit} title="Select"></Button>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 18,
    paddingBottom: 10,
    textAlign: "center"
  },
});

export default SamplerEdit;
