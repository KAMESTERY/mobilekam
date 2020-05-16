import React from "react";
import { Text, ScrollView } from "react-native";
import styled from 'styled-components/native';

const NewsItem = props => {
    return (
        <NewsItemView>
            <Text>{props.article.title}</Text>
        </NewsItemView>
    );
};

const NewsItemView = styled.ScrollView`
  padding: 10px;
`;

export default NewsItem;