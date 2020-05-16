import React from "react";
import { ImageBackground } from 'react-native';
import { Card, Paragraph, Title } from 'react-native-paper';
import styled from 'styled-components/native';
import { Base64 } from 'js-base64';
import {Dimensions, Image} from "react-native";

const NewsItem = props => {
    const body = Base64.decode(props.article.body).substring(0, 128);
    const fileUrl = props.article.media[0] && props.article.media[0].fileUrl ? props.article.media[0].fileUrl : "http://via.placeholder.com/300";
    const window = Dimensions.get('window');
    return (
        <NewsItemView>
            <Card>
                <Card.Title title={props.article.title} subtitle={props.article.topic} />
                <Card.Content>
                    <Card.Cover source={{uri: fileUrl}} />
                    <Title>{props.article.title}</Title>
                    <Paragraph>{body}...</Paragraph>
                </Card.Content>
            </Card>
        </NewsItemView>
    );
};

const NewsItemView = styled.ScrollView`
  height: 100;
  padding: 10px;
`;

export default NewsItem;