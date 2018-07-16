import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Button, TouchableOpacity, Image, } from 'react-native';
import { main_color, main_text_color, app_name, icon_height, icon_width, screen_size } from '../../Values';
import ic_logo from '../../Images/Icon/icons8_Trainers_50px_1.png';
import ic_back from '../../Images/Icon/icons8_Back_50px.png';
import Register from '../../api/Register';
import global from '../global';
import SignIn from './SignIn';
import SignUp from './SignUp';

export default class Authentication extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            name: '',
            password: '',
            phone: '',
            address: '',
            isSigin: true,
        }
        global.onSignOut();
    }
    
    SignIn() {
        this.setState({ isSigin: true });
    }

    SignUp() {
        this.setState({ isSigin: false });
    }
    render() {
        const mainJSX = this.state.isSigin ? <SignIn /> : <SignUp />;
        return (
            < View style={styles.container}>
                <View style={styles.hearder}>
                    <View style={styles.hearder2}>
                        <TouchableOpacity onPress={() => { this.props.navigation.goBack() }}>
                            <Image style={styles.iconStyle} source={ic_back} />
                        </TouchableOpacity>
                        <Text style={styles.titleStyle}>{app_name}</Text>
                        <Image style={styles.iconStyle} source={ic_logo} />
                    </View>
                </View>
                {mainJSX}
                <View style={styles.controlStyle}>
                    <TouchableOpacity onPress={this.SignIn.bind(this)} style={styles.signInStyle}>
                        <Text style={this.state.isSigin ? styles.activeStyle : styles.inactiveStyle}>SIGN IN</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.SignUp.bind(this)} style={styles.signUpStyle}>
                        <Text style={this.state.isSigin ? styles.inactiveStyle : styles.activeStyle}>SIGN UP</Text>
                    </TouchableOpacity>
                </View>
            </View >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: main_color,
        paddingHorizontal: 20,
    },
    hearder: {
        backgroundColor: main_color,
        height: screen_size.height / 8,
        justifyContent: 'space-around',
        padding: 10,
    },
    hearder2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5,
    },
    iconStyle: {
        width: icon_width,
        height: icon_height,
    },
    titleStyle: {
        color: main_text_color,
        fontSize: 20,
    },
    controlStyle: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    signInStyle: {
        flex: 1,
        backgroundColor: main_text_color,
        alignItems: 'center',
        padding: 10,
        marginRight: 1,
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15,
    },
    signUpStyle: {
        flex: 1,
        backgroundColor: main_text_color,
        alignItems: 'center',
        padding: 10,
        marginLeft: 1,
        borderTopRightRadius: 15,
        borderBottomRightRadius: 15,
    },
    activeStyle: {
        color: main_color,
    },
    inactiveStyle: {
        color: '#ADADAD',
    },

});