import React from 'react';
import { ActivityIndicator } from 'react-native-paper';
import styled from 'styled-components/native';

const Loading = () => {
    return (
        <LoadingWrap>
            <ActivityIndicator size="large" />
        </LoadingWrap>
    );
};

const LoadingWrap = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export default Loading;