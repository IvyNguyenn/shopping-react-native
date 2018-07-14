import React, { Component } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { createStackNavigator, StackNavigator } from 'react-navigation';
import HomeView from './HomeView';
import ListProduct from '../ListProduct/ListProduct';
import ProductDetail from '../ProductDetail/ProductDetail';

const RootStack = createStackNavigator(
    { 
        HOME_VIEW: HomeView,
        LIST_PRODUCT: ListProduct,
        PRODUCT_DETAIL: ProductDetail,
    },
    {
        headerMode: 'none',
    },
    {
        initialRountName: 'HOME_VIEW'
    },
);

export default class Home extends Component {
    render() {
        return (
            <RootStack />
        );
    }
}

const styles = StyleSheet.create({
    container: {
    }
});
