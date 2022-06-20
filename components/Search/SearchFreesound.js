import React, { useState } from "react";
import axios from "axios";
import { StyleSheet, Text, TextInput, Button, View, FlatList } from "react-native";
import { useDispatch } from "react-redux";
import { addSampler } from "../../store/reducer";

const formatted = (item) => {
	return {
    id: item.id,
    name: item.name,
    uri: item.name
  }
}

const SearchView = () => {
  
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm ] = useState('');
  const [listFreesound, setListFreesound] = useState([]);

  const searchFreesound = async (searchTerm) => {
    const response = await fetch(`https://freesound.org/apiv2/search/text/?&token=Kr5sEiG53wPoDRqzda07VQ73AacQl4r222smWasF&query=${searchTerm}`)
    const json = await response.json()
    return json.results.map(formatted)
  }

  const searchFreesoundSubmit = () => {
    searchFreesound(searchTerm).then((result) => {
      setListFreesound(result);
    })
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Sample</Text>
      <TextInput
        style={styles.search}
        onChangeText={(text) => setSearchTerm(text)}
        placeholder="Research by name.."
        onSubmitEditing={searchFreesoundSubmit}
        value={searchTerm}
      />
      <FlatList
        style={styles.wrap}
        data={listFreesound}
        renderItem={(result) => (
          <View style={styles.container}>
            <Text style={styles.title}> {result.item.name}</Text>
            <Button title="add" onPress={() => { dispatch(addSampler(result.item)) }}></Button>
          </View>
        )}
        keyExtractor={(result) => result.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 25,
    marginBottom: 20,
  },
  search: {
    padding: 8,
    borderWidth: 2,
  },
  wrap:{
    padding: 10,
  }
});


export default SearchView;