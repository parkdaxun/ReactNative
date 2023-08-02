import {Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SafeAreaView} from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import React from 'react';

const Tab = createBottomTabNavigator();

function HomeScreen() {
  return <Text>Home</Text>;
}

function SearchScreen() {
  return <Text>Search</Text>;
}

function NotificationScreen() {
  return <Text>Notification</Text>;
}

function MessageScreen() {
  return <Text>Message</Text>;
}

function App() {
  return (
      <NavigationContainer>
        <Tab.Navigator
            initialRouteName="Home"
            tabBarOptions={{
                activeTintColor: "#3e6533",
                showLabel: true,
            }}>
          <Tab.Screen
              name="Home"
              component={HomeScreen}
              options={{
                  title: '홈',
                  tabBarIcon: ({color, size}) => (
                      <Icon name="home" color={color} size={size} />
                  ),
              }}
          />
          <Tab.Screen
              name="Search"
              component={SearchScreen}
              options={{
                  title: '검색',
                  tabBarIcon: ({color, size}) => (
                      <Icon name="search" color={color} size={size} />
                  ),
              }}
          />
          <Tab.Screen
              name="Notification"
              component={NotificationScreen}
              options={{
                  title: '알림',
                  tabBarIcon: ({color, size}) => (
                      <Icon name="notifications" color={color} size={size} />
                  ),
              }}
          />
          <Tab.Screen
              name="Message"
              component={MessageScreen}
              options={{
                  title: '메세지',
                  tabBarIcon: ({color, size}) => (
                      <Icon name="message" color={color} size={size} />
                  ),
              }}
          />
        </Tab.Navigator>
      </NavigationContainer>
  );
}

export default App;
