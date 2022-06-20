import React, {useState} from "react";
import { FlatList, View, StyleSheet, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
import { samplerSelector } from "../../store/reducer";
import { Audio } from "expo-av";
import SamplerDetail from "./SamplerDetail";

const defaultMusic = [
  require("../../assets/sampler/default1.wav"),
  require("../../assets/sampler/default2.wav"),
  require("../../assets/sampler/default3.wav"),
  require("../../assets/sampler/default4.wav"),
  require("../../assets/sampler/default5.wav"),
  require("../../assets/sampler/default6.wav"),
];

const SamplerList = ({navigation}) => {

  const library = useSelector(samplerSelector);
  const [sound, setSound] = useState("");

  async function playSound(item) {
    const { sound } = await Audio.Sound.createAsync(defaultMusic[item.id - 1]);
    setSound(sound);
    await sound.playAsync();
  }

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.wrap}
        data={library}
        numColumns={3}
        renderItem={({ item }) => (

          <TouchableOpacity
            onPress={() => { playSound(item) }}
            onLongPress={() => {
              navigation.navigate("SamplerEdit", { item : item }); }} >            
            <SamplerDetail {...item}/>
          </TouchableOpacity>
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
    wrap:{
      flex: 1,
      paddingLeft: "7vw",
      paddingRight: "7vw"
    },
    title: {
      fontSize: 32,
      marginBottom: 20,
    },
  });

export default SamplerList;
