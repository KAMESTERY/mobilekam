import React from "react";
import { FlatList, View, TouchableOpacity } from "react-native";
import { Divider, Surface } from 'react-native-paper';
import styled from 'styled-components/native';
import NewsItem from "./NewsItem";

const NewsFeed = props => {
    return (
        <View>
            <Surface>
                <FlatList
                    refreshing={props.refreshing}
                    onRefresh={props.onRefresh}
                    data={props.articles}
                    keyExtractor={({ title }) => title.toString()}
                    ItemSeparatorComponent={() => <Separator />}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            onPress={() =>
                                props.navigation.navigate('Details', {
                                    topic: item.topic,
                                    documentID: item.documentID,
                                })}>
                            <NewsItem article={item} />
                        </TouchableOpacity>
                    )}
                />
            </Surface>
        </View>
    )
};

// Separator styled component
const Separator = styled(Divider)`
  height: 1;
  width: 100%;
  background-color: #ced0ce;
`;

export  default NewsFeed;