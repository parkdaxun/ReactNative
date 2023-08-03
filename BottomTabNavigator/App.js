import {Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from "react-native-screens/native-stack";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SafeAreaView} from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import MainScreen from './screens/MainScreen';
import React from 'react';

const Stack = createNativeStackNavigator();

function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
                name="Main"
                component={MainScreen}
                options={{headerShown: false}}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
}

export default App;
