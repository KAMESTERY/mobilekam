import React from 'react';
import { Text, View, Button } from "react-native";
import { useQuery, gql } from "@apollo/client";
import NewsFeed from './NewsFeed';


const GET_NEWS_FEED = gql`
    query GetNewsFeed {
        articles: getdocumentsbytopics(
            topics: [
                "com.kamestery.devdata:##:africa",
                "com.kamestery.devdata:##:development",
                "com.kamestery.devdata:##:education"
            ]
        ) {
            topic
            documentID
            title
            tags
            createdAt
            updatedAt
            media {
                mediaID
                fileUrl
                tags
            }
        }
    }
`;

const Feed = props => {

    const { loading, error, data } = useQuery(GET_NEWS_FEED);

    if (loading) return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Loading...</Text>
        </View>
    );

    if (error) return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Error Loading News Feed.</Text>
        </View>
    );

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>News Feed</Text>
            <NewsFeed
                articles={data.articles}
                navigation={props.navigation}
            />
        </View>
    )
};

Feed.navigationOptions = {
    title: 'Feed'
};

export default Feed;