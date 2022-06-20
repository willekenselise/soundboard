import React from "react";
import { FlatList, View, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import SamplerEdit from "./SamplerEdit";
import { samplerSelector } from "../../store/reducer";

const EditSamplerView = ({ navigation }) => {

  const library = useSelector(samplerSelector);

  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        data={library}
        renderItem={({item}) => (
          <SamplerEdit item={item} navigation={navigation}></SamplerEdit>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 25,
  }
});

export default EditSamplerView;
