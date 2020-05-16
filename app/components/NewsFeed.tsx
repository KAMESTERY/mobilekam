import React from "react";
import { FlatList, View, TouchableOpacity } from "react-native";
import styled from 'styled-components/native';
import NewsItem from "./NewsItem";

const NewsFeed = props => {
    return (
        <View>
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
                        <FeedView>
                            <NewsItem article={item} />
                        </FeedView>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
};



// FeedView styled component definition
const FeedView = styled.View`
  height: 100;
  overflow: hidden;
  margin-bottom: 10px;
`;

// Separator styled component
const Separator = styled.View`
  height: 1;
  width: 100%;
  background-color: #ced0ce;
`;

export  default NewsFeed;