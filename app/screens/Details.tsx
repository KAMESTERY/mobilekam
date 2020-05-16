import React from 'react';
import { Text, View } from 'react-native';
import { useQuery, gql } from "@apollo/client";

const GET_ARTICLE_DETAILS = gql`
    query GetArticle($topic: String, $documentID: ID) {
        article: getdocument(
            topic: $topic,
            documentID: $documentID
        ) {
            topic
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

const Details = props => {
    const topic = props.navigation.getParam('topic');
    const documentID = props.navigation.getParam('documentID');
    const { loading, error, data } = useQuery(GET_ARTICLE_DETAILS, {
        variables: { topic, documentID }
    });

    if (loading) return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Loading Details...</Text>
        </View>
    );

    if (error) return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Error Loading Details.</Text>
        </View>
    );

    return (
        <View style={{ padding: 10 }}>
            <Text>Article Topic: {data.article.topic}</Text>
            <Text>Article Title: {data.article.title}</Text>
            <Text>{data.body}</Text>
        </View>
    );
};

Details.navigationOptions = {
    title: 'Details'
};

export default Details;