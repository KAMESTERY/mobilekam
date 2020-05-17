import React from "react";
import {Dimensions} from 'react-native';
import {Card, Paragraph} from 'react-native-paper';
import styled from 'styled-components/native';
import {Base64} from 'js-base64';

const NewsItem = props => {
    const body = Base64.decode(props.article.body).substring(0, 128);
    const fileUrl = props.article.media[0] && props.article.media[0].fileUrl ? props.article.media[0].fileUrl : "http://via.placeholder.com/300";
    const window = Dimensions.get('window');
    return (
        <Card style={{flex: 1, flexDirection: "column", margin: 4}}>
            <Card.Cover source={{uri: fileUrl}} />
            <Card.Title title={props.article.title} subtitle={props.article.topic} />
            <Card.Content>
                <Paragraph>{body}....</Paragraph>
            </Card.Content>
        </Card>
    );
};

const NewsItemView = styled.ScrollView`
  height: 100;
  padding: 10px;
`;

export default NewsItem;