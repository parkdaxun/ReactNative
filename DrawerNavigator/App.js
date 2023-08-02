import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from "@react-navigation/drawer";
import {View, Text, Button} from 'react-native';

const Drawer = createDrawerNavigator();

function HomeScreen({navigation}) {
  return (
      <View>
        <Text>Home</Text>
        <Button title="Drawer 열기" onPress={() => navigation.openDrawer()} />
        <Button title="Setting 열기" onPress={() => navigation.navigate('Setting')} />
      </View>
  );
};

function SettingScreen({navigation}) {
  return (
      <View>
        <Text>Setting</Text>
        <Button title="뒤로가기" onPress={() => navigation.canGoBack()} />
      </View>
  );
};

function App() {
  return (
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName="Home"
          drawerPosition="left"
          backDehavior="history">
          <Drawer.Screen name="Home" component={HomeScreen} />
          <Drawer.Screen name="Setting" component={SettingScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
  );
};

export default App;
