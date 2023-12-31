import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FeedsScreen from "./FeedsScreen";
import CalendarScreen from "./CalendarScreen";
import SearchScreen from "./SearchScreen";
import TodoListScreen from "./TodoListScreen";
import Icon from 'react-native-vector-icons/MaterialIcons';
import SearchHeader from "../component/Search/SearchHeader";

const Tab = createBottomTabNavigator();

function MainTab() {
    return (
        <Tab.Navigator
            tabBarOptions={{
                showLabel: false,
                activeTintColor: '#000000',
            }}>
            <Tab.Screen
                name="ToDo List"
                component={TodoListScreen}
                options={{
                    tabBarIcon: ({color, size}) => (
                        <Icon name="check" size={size} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="Feeds"
                component={FeedsScreen}
                options={{
                    tabBarIcon: ({color, size}) => (
                        <Icon name="view-stream" size={size} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="Calendar"
                component={CalendarScreen}
                options={{
                    tabBarIcon: ({color, size}) => (
                        <Icon name="event" size={size} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="Search"
                component={SearchScreen}
                options={{
                    tabBarIcon: ({color, size}) => (
                        <Icon name="search" size={size} color={color} />
                    ),
                    headerTitle : () => <SearchHeader />,
                }}
            />
        </Tab.Navigator>
    )
}

export default MainTab;
