import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Image, Dimensions, TouchableOpacity } from 'react-native';
import { main_color, app_name, } from '../../Values';
import ic_logo from '../../Images/Icon/icons8_Trainers_50px_1.png';
import ic_menu from '../../Images/Icon/icons8_Menu_50px_1.png';

const { screen_height } = Dimensions.get('window');

export default class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: ''
        }
    }
    render() {
        return (
            <View style={styles.hearder}>
                <Text>HOme screen</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    hearder: {
        height: screen_height / 8,
    },
    hearder2: {
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    container1: {
    },
    textInputStyle: {
        height: 40,
        color: 'white',
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 5,
    }
});
