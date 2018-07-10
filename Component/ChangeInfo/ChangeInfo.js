import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export default class ChangeInfo extends Component {
    render() {
        return (
            <View>
                <Text>CHANGE INFO </Text>
                <Button
                    title='go back'
                    onPress={() => { this.props.navigation.goBack() }}
                />
                <Button
                    title='go to order history'
                    onPress={() => { this.props.navigation.navigate('ORDER_HISTORY') }}
                />
            </View>
        );
    }
}