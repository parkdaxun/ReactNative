import React from 'react';
import {createNativeStackNavigator} from "react-native-screens/native-stack";
import HomeScreen from './screens/HomeScreen';
import DetailScreen from "./screens/DetailScreen";
import {NavigationContainer} from "@react-navigation/native";

const Stack = createNativeStackNavigator();

function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Detail" component={DetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
  );
};

export default App;
