import React from "react";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";

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
            tabBarLabel: 'Home'
        }
    },
    FavoriteScreen: {
        screen: FavoritesStack,
        navigationOptions: {
            tabBarLabel: 'Favorites'
        }
    }
});

// Create the app container
export default createAppContainer(TabNavigator);