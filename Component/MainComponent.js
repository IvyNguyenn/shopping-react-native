import React, { Component } from 'react'
import { View, Text,StyleSheet, } from 'react-native'
import TabNavigator from 'react-native-tab-navigator';
import HomeScreen from './HomeComponent/HomeScreen';

export default class MainComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            selectedTab:'Home',
        }
    }
    render() {
        return (
            <TabNavigator>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'Home'}
                    title="Home"
                    onPress={() => this.setState({ selectedTab: 'Home' })}>
                    <HomeScreen/>
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'Setting'}
                    title="Setting"
                    badgeText="12"
                    onPress={() => this.setState({ selectedTab: 'Setting' })}>
                    <View style={{ flex: 1, backgroundColor: 'blue' }}></View>
                </TabNavigator.Item>
            </TabNavigator>
        );
    }
}

const styles = StyleSheet.create({
    container1: {
        flex: 1,
        backgroundColor: 'pink',
    },
    container2: {
        flex: 1,
        backgroundColor: 'red',
    },

});