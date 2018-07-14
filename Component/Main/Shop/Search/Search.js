import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native';
import { createStackNavigator, StackNavigator } from 'react-navigation';
import SearchView from './SearchView';
import ProductDetail from '../ProductDetail/ProductDetail';

const RootStack = createStackNavigator(
    {
        SEARCH_VIEW: SearchView,
        PRODUCT_DETAIL: ProductDetail,
    },
    {
        headerMode: 'none',
    },
    {
        initialRountName: 'SEARCH_VIEW'
    },
);

export default class Search extends Component {
    render() {
        return (
            <RootStack />
        );
    }
}


