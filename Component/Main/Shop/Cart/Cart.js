import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native';
import { createStackNavigator, StackNavigator } from 'react-navigation';
import CartView from './CartView';
import ProductDetail from '../ProductDetail/ProductDetail';

const RootStack = createStackNavigator(
    {
        CART_VIEW: CartView,
        PRODUCT_DETAIL: ProductDetail,
    },
    {
        headerMode: 'none',
    },
    {
        initialRountName: 'CART_VIEW'
    },
);

export default class Cart extends Component {
    render() {
        return (
            <RootStack />
        );
    }
}


