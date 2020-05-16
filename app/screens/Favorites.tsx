import React from 'react';
import { View } from "react-native";
import { Button, Text } from 'react-native-paper';
import Details from "./Details";

const Favorites = props => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingTop: 20 }}>
            <Text>Your Favorites</Text>
            {/*<Button*/}
            {/*    title="View Details"*/}
            {/*    onPress={() => props.navigation.navigate('Details')}*/}
            {/*/>*/}
        </View>
    )
};

Favorites.navigationOptions = {
    title: 'Favorites'
};

export default Favorites;