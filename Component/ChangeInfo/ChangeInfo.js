import React, { Component } from 'react';
import { View, Text, Button, TouchableOpacity, Image, StyleSheet, TextInput } from 'react-native';
import {
    layout_color, item_layout_color, shadow_color,
    collection_item_height, screen_size, collection_item_image_height, collection_item_image_width,
    banner_width, banner_height, icon_height, icon_width, main_color, main_suptext_color, main_text_color,
} from '../../Values';
import ic_menu from '../../Images/Icon/icons8_Back_50px.png';
import avatar from '../../Images/Banner/user.png';

export default class ChangeInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            address: '',
            phone: '',
        }
    }
    componentDidMount() {
        const { user } = this.props.navigation.state.params;
        this.setState({
            name: user.name,
            address: user.address,
            phone: user.phone,
        });
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
                <View style={styles.containerImage}>
                    <Image source={avatar} style={styles.imageStyle} />
                </View>
                <View style={styles.containerForm}>
                    <TextInput
                        style={styles.textInputStyle}
                        placeholder='Enter your name'
                        onChangeText={(name) => this.setState({ name })}
                        value={this.state.name}
                    />
                    <TextInput
                        style={styles.textInputStyle}
                        placeholder='Enter your address'
                        onChangeText={(address) => this.setState({ address })}
                        value={this.state.address}
                    />
                    <TextInput
                        style={styles.textInputStyle}
                        placeholder='Enter your phone number'
                        onChangeText={(phone) => this.setState({ phone })}
                        value={this.state.phone}
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
    containerImage:{
        flex:0.5,
        alignItems: 'center',
        justifyContent:'center',
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
    imageStyle: {
        width: 150,
        height: 150,
        borderColor: 'white',
        borderRadius: 100,
        borderWidth: 0.8,
    },
});