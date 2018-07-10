import React, { Component } from 'react'
import { View, Text ,Button} from 'react-native'

export default class OrderHistory extends Component {
    render() {
        return (
            <View>
                <Text>ORDER HISTORY</Text>
                <Button
                title='go back'
                onPress={()=>{this.props.navigation.goBack()}}
                />
            </View>
        );
    }
}