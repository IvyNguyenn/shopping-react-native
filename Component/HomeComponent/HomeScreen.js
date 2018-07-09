import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput, Image, Dimensions, TouchableOpacity } from 'react-native'
import { main_color, app_name, } from '../../Values'
import ic_logo from '../../Images/Icon/icons8_Trainers_50px_1.png'
import ic_menu from '../../Images/Icon/icons8_Menu_50px_1.png'

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
            <View style={styles.hearder2}>
                <TouchableOpacity>
                    <Image source={ic_menu} />
                </TouchableOpacity>
                <Text>{app_name}</Text>
                <Image source={ic_logo} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    hearder: {
        backgroundColor: main_color,
        height: screen_height / 8,
    },
    hearder2: {
        flexDirection: 'row',
        justifyContent:'space-between',
        
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
