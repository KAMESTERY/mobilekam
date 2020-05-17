import React from 'react';
import { Dimensions, Image, View } from 'react-native';
import {Avatar, Card, Divider, Headline, Paragraph, Subheading, Surface, Text} from 'react-native-paper';
import styled from 'styled-components/native';
import { useQuery, gql } from "@apollo/client";
import { Base64 } from 'js-base64';
import Loading from "../components/Loading";

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

    if (loading) return <Loading />;

    if (error) return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Error Loading Details.</Text>
        </View>
    );

    const body = Base64.decode(data.article.body);
    const fileUrl = data.article.media[0] && data.article.media[0].fileUrl ? data.article.media[0].fileUrl : "http://via.placeholder.com/300";
    const window = Dimensions.get('window');
    return (
        <Card style={{flex: 1, flexDirection: "column", margin: 4}}>
            <Card.Cover source={{uri: fileUrl}} />
            <Card.Title title={data.article.title} subtitle={data.article.topic} />
            <Card.Content>
                <Paragraph>{body}</Paragraph>
            </Card.Content>
        </Card>
    );
};



Details.navigationOptions = {
    title: 'Details'
};

export default Details;