import React, { Component } from 'react';
import { View, Text, Button, TouchableOpacity, Image, StyleSheet, TextInput } from 'react-native';
import {
    layout_color, item_layout_color, shadow_color,
    collection_item_height, screen_size, collection_item_image_height, collection_item_image_width,
    banner_width, banner_height, icon_height, icon_width, main_color, main_suptext_color, main_text_color,
} from '../../Values';
import ic_menu from '../../Images/Icon/icons8_Back_50px.png';

export default class ChangeInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.hearder}>
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                        <Image style={styles.iconStyle} source={ic_menu} />
                    </TouchableOpacity>
                    <Text style={styles.titleStyle}>USER INFOMATION</Text>
                </View>
                <View style={styles.containerForm}>
                    <TextInput
                        style={styles.textInputStyle}
                        placeholder='Enter your name'
                        onChangeText={(text) => this.setState({ text })}
                        value={this.state.text}
                    />
                    <TextInput
                        style={styles.textInputStyle}
                        placeholder='Enter your address'
                        onChangeText={(text) => this.setState({ text })}
                        value={this.state.text}
                    />
                    <TextInput
                        style={styles.textInputStyle}
                        placeholder='Enter your phone number'
                        onChangeText={(text) => this.setState({ text })}
                        value={this.state.text}
                    />
                    <TouchableOpacity>
                        <Text style={styles.signInBtnStyle}>UP DATE INFOMATION</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    containerForm: {
        flex: 1,
        marginHorizontal: 20,
        justifyContent: 'center',
    },
    hearder: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: main_color,
        height: screen_size.height / 12,
        padding: 12,
    },
    iconStyle: {
        width: icon_width,
        height: icon_height,
    },
    titleStyle: {
        color: 'white',
        fontSize: 15,
    },
    textInputStyle: {
        height: 40,
        backgroundColor: main_text_color,
        borderColor: main_color,
        borderWidth: 1,
        borderRadius: 15,
        marginVertical: 10,
        paddingLeft: 20,
    },
    signInBtnStyle: {
        height: 40,
        color: main_text_color,
        backgroundColor: main_color,
        borderRadius: 15,
        marginVertical: 10,
        padding: 10,
        paddingLeft: (screen_size.width - 40) / 3.3,
    },
});