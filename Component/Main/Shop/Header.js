import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Image, Dimensions, TouchableOpacity } from 'react-native';
import { main_color, app_name, icon_height, icon_width,screen_size } from '../../../Values';
import ic_logo from '../../../Images/Icon/icons8_Trainers_50px_1.png';
import ic_menu from '../../../Images/Icon/icons8_Menu_50px_1.png';

export default class Shop extends Component {
    // openMenu() {
    //     const { open } = this.props;
    //     open();
    // }
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'Home',
            text: '',
        }
    }

    render() {
        return (
            <View style={styles.hearder}>
                <View style={styles.hearder2}>
                    <TouchableOpacity onPress={this.props.onOpenMenu}>
                        <Image style={styles.iconStyle} source={ic_menu} />
                    </TouchableOpacity>
                    <Text style={styles.titleStyle}>{app_name}</Text>
                    <Image style={styles.iconStyle} source={ic_logo} />
                </View>
                <TextInput
                    style={styles.textInputStyle}
                    onChangeText={(text) => this.setState({ text })}
                    value={this.state.text}
                    placeholder='What do you want to buy?'
                    underlineColorAndroid='transparent'
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    hearder: {
        backgroundColor: main_color,
        height: screen_size.height / 8,
        justifyContent: 'space-around',
        padding: 12,
    },
    hearder2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5,
    },
    textInputStyle: {
        height: 40,
        backgroundColor: 'white',
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 5,
    },
    iconStyle: {
        width: icon_width,
        height: icon_height,
    },
    titleStyle: {
        color: 'white',
        fontSize: 15,
    },

});