import React, { Component } from 'react';
import { View, Text, StyleSheet, } from 'react-native';
import { createStackNavigator, StackNavigator } from 'react-navigation';
import MainScreen from './Main/MainScreen';
import Authentication from './Authentication/Authentication';
import ChangeInfo from './ChangeInfo/ChangeInfo';
import OrderHistory from './OrderHistory/OrderHistory';
import Menu from './Main/Menu';

const RootStack = createStackNavigator(
    { 
        MAIN: MainScreen,
        MENU: Menu,
        AUTHENTICATION: Authentication,
        CHANGE_INFO: ChangeInfo,
        ORDER_HISTORY: OrderHistory,
    },
    {
        headerMode: 'none',
        navigationOptions: {
            headerVisible: false,
        }
    },
    {
        initialRountName: 'MAIN'
    },
    

);

export default class MainComponent extends Component {
    render() {
        return (
            <RootStack />
        );
    }
}

