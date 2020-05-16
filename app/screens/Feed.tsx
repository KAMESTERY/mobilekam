import React from 'react';
import { View } from "react-native";
import { Text } from 'react-native-paper';
import { useQuery, gql } from "@apollo/client";
import Loading from '../components/Loading';
import NewsFeed from '../components/NewsFeed';


const GET_NEWS_FEED = gql`
    query GetNewsFeed {
        articles: getdocumentsbytopics(
            topics: [
                "com.kamestery.devdata:##:africa",
                "com.kamestery.devdata:##:culture",
                "com.kamestery.devdata:##:development",
                "com.kamestery.devdata:##:education",
                "com.kamestery.devdata:##:history"
            ]
        ) {
            topic
            documentID
            title
            body
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

    const { loading, error, data, refetch } = useQuery(GET_NEWS_FEED);

    if (loading) return <Loading />;

    if (error) return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Error Loading News Feed: {error}.</Text>
        </View>
    );

    return (
        <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', paddingTop: 20 }}>
            <Text>News Feed</Text>
            <NewsFeed
                articles={data.articles}
                navigation={props.navigation}
                refreshing={data.networkStatus === 4}
                onRefresh={() => refetch()}
            />
        </View>
    )
};

Feed.navigationOptions = {
    title: 'Feed'
};

export default Feed;