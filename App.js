
import React from "react";
import { StyleSheet } from "react-native";
import { Provider } from "react-redux";
import store from "./store/store";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SearchFreesound from "./components/Search/SearchFreesound";
import SamplerList from "./components/Sampler/SamplerList";
import SamplerEditlist from "./components/Sampler/SamplerEditList";
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

const Tabs = createBottomTabNavigator();
const Stack = createStackNavigator();

const Main = () => {
  return (
      <Tabs.Navigator>
		<Tabs.Screen 
			name="Sampler"
			options={{
				tabBarLabel: 'Sampler',
				tabBarIcon: () => (
				  <MaterialCommunityIcons name="home" size={24} color="#03224c" />
				),
			  }}>				
				{(props) => <SamplerList {...props }/>}
		</Tabs.Screen>
        <Tabs.Screen 
			name="Search"
			options={{
				tabBarLabel: 'Add Sampler',
				tabBarIcon: () => (
				  <MaterialCommunityIcons name="music" size={24} color="#03224c" />
				),
			  }}>
				{(props) => <SearchFreesound {...props} />}
		</Tabs.Screen>
      </Tabs.Navigator>
  );
};

const App = () => {
	return (
		<Provider store={store}>
			<NavigationContainer>
				<Stack.Navigator screenOptions={{ headerMode:"screen"}}>
					<Stack.Screen
						name="Main"
						options={{ headerShown: false }}
						component={Main}
					/>
					<Stack.Screen
						name="SamplerEdit"
						component={SamplerEditlist}
					/>
				</Stack.Navigator>
			</NavigationContainer>
		</Provider>
	)
	
}


export default App;