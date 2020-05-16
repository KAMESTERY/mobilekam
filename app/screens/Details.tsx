import React from 'react';
import { Text, View } from 'react-native';

const Details = () => {
    return (
        <View style={{ padding: 10 }}>
            <Text>Those are the Details</Text>
        </View>
    );
};

Details.navigationOptions = {
    title: 'Details'
};

export default Details;