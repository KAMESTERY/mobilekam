import React from "react";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";
import { MaterialCommunityIcons } from '@expo/vector-icons';

// import screens
import Feed from './Feed';
import Details from "./Details";
import Favorites from './Favorites';

// stackable screens
const FeedStack = createStackNavigator({
    Feed: Feed,
    Details: Details
});
const FavoritesStack = createStackNavigator({
    Favorites: Favorites,
    Details: Details
});

// navigation tabs
const TabNavigator = createBottomTabNavigator({
    FeedScreen: {
        screen: FeedStack,
        navigationOptions: {
            tabBarLabel: 'Home',
            tabBarIcon: ({ tintColor }) => (
                <MaterialCommunityIcons
                    name="home" size={24}
                    color={tintColor}
                />
            )
        }
    },
    FavoriteScreen: {
        screen: FavoritesStack,
        navigationOptions: {
            tabBarLabel: 'Favorites',
            tabBarIcon: ({ tintColor }) => (
                <MaterialCommunityIcons
                    name="star" size={24}
                    color={tintColor}
                />
            )
        }
    }
});

// Create the app container
export default createAppContainer(TabNavigator);