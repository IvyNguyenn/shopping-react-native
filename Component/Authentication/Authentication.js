import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export default class Authentication extends Component {
    render() {
        return (
            <View>
                <Text>AUTHENTICATION</Text>
                <Button
                    title='go back'
                    onPress={() => { this.props.navigation.goBack() }}
                />
            </View>
        );
    }
}