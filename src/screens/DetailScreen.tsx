import React from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';
import Button from '../components/Button';

const Container = styled(View)`
  flex: 1;
  padding: 20px;
  align-items: center;
  justify-content: center;
`;

const Title = styled(Text)`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const DetailScreen = ({ navigation }: any) => {
    const handlePress = () => {
        navigation.goBack();
    };

    return (
        <Container>
            <Title>Product Details</Title>
            <Text>Product Name: Example Product</Text>
            <Text>Price: $19.99</Text>
            <Button title="Go Back" onPress={handlePress} />
        </Container>
    );
};

export default DetailScreen;