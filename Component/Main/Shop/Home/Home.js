import React, { Component } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { createStackNavigator, StackNavigator } from 'react-navigation';
import HomeView from './HomeView';
import ListProduct from '../ListProduct/ListProduct';
import ProductDetail from '../ProductDetail/ProductDetail';
import global from '../../../global';


const RootStack = createStackNavigator(
    {
        HOME_VIEW: {screen:HomeView},
        LIST_PRODUCT: {screen:ListProduct},
        PRODUCT_DETAIL: {screen:ProductDetail},
    },
    {
        headerMode: 'none',
        initialRountName: 'HOME_VIEW',
        //initialRouteParams: { types: global.types, products: global.products }
    },
);

export default class Home extends Component {
    render() {
        //const { types, products } = this.props;
        return (
            <RootStack />
        );
    }
}

const styles = StyleSheet.create({
    container: {
    }
});
