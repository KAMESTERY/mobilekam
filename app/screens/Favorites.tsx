import React from 'react';
import { Text, View, Button } from "react-native";
import Details from "./Details";

const Favorites = props => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Your Favorites</Text>
            <Button
                title="View Details"
                onPress={() => props.navigation.navigate('Details')}
            />
        </View>
    )
};

Favorites.navigationOptions = {
    title: 'Favorites'
};

export default Favorites;