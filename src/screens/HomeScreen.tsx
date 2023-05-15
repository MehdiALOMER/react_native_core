import React, { useEffect } from 'react';
import { Text, FlatList, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { getProductListRequest } from '../store/actions/productActions';
import { AppState, Product } from '../types/stateTypes';
import styled from 'styled-components/native';
import ProductCard from '../components/ProductCard';

interface HomeScreenProps {
  productList: Product[];
  loading: boolean;
  error: string | null;
  getProductListRequest: () => void;
}

const Container = styled.View`
  flex: 1;
  padding: 16px;
`;

const ItemContainer = styled.View`
  padding: 8px;
  border-bottom-width: 1px;
  border-bottom-color: #ccc;
`;

const ItemText = styled.Text`
  font-size: 16px;
  color: #333;
`;

const HomeScreen: React.FC<HomeScreenProps> = ({
  productList,
  loading,
  error,
  getProductListRequest,
}) => {
  useEffect(() => {
    getProductListRequest();
  }, []);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error: {error}</Text>;
  }

  return (
    <Container>
      {loading ? (
        <ActivityIndicator />
      ) : error ? (
        <Text>{error}</Text>
      ) : (
        <FlatList
          data={productList}
          renderItem={({ item }) => (
            <ProductCard title={item.title} price={item.price} imageSource={item.images[0]} onPress={() => { console.log('pressed') }} />
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      )}
    </Container>
  );
};

const mapStateToProps = (state: any) => ({
  productList: state.productReducer.productList,
  loading: state.productReducer.loading,
  error: state.productReducer.error,
});

const mapDispatchToProps = {
  getProductListRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
