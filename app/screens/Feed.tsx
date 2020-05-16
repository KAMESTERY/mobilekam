import React from 'react';
import { Text, View, Button } from "react-native";

const Feed = props => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>News Feed</Text>
            <Button
                title="View Details"
                onPress={() => props.navigation.navigate('Details')}
            />
        </View>
    )
};

Feed.navigationOptions = {
    title: 'Feed'
};

export default Feed;