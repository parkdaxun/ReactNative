import React from 'react';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {Text, View, Button} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Tab = createBottomTabNavigator();

function HomeScreen({navigation}) {
    return (
        <View>
            <Text>Home</Text>
        </View>
    );
}

function SearchScreen() {
    return (
        <View>
            <Text>Search</Text>
        </View>
    );
}

function NotificationScreen() {
    return (
        <View>
            <Text>Notification</Text>
        </View>
    );
}

function MessageScreen() {
    return (
        <View>
            <Text>Message</Text>
        </View>
    );
}

function MainScreen() {
    return(
        <Tab.Navigator
            initialRouteName="Home"
            tabBarOptions={{
                activeTintColor: "#45549b",
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
                    tabBarBadge: true,
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
                    tabBarBadge: 'new',
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
                    tabBarBadge: 5,
                }}
            />
        </Tab.Navigator>
    )
}

export default MainScreen;
