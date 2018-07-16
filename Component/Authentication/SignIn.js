import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Button, TouchableOpacity, Image, } from 'react-native';
import { main_color, main_text_color, app_name, icon_height, icon_width, screen_size } from '../../Values';
import Login from '../../api/Login';
import global from '../global';

export default class Authentication extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: 'vy123@gmail.com',
            password: '123',
        }
    }
    signIn() {
        const { email, password } = this.state;
        Login(email,password)
            .then(res => {
                console.log('response sign in ======== '+res);
                if(res === 'SAI_THONG_TIN_DANG_NHAP') return global.onSignOut();
                global.onSignIn();
            });
    }
    render() {
        return (
            <View >
                <TextInput
                    style={styles.textInputStyle}
                    placeholder='Enter your email'
                    onChangeText={(email) => this.setState({ email })}
                    value={this.state.email}
                />
                <TextInput
                    style={styles.textInputStyle}
                    placeholder='Enter your password'
                    secureTextEntry
                    onChangeText={(password) => this.setState({ password })}
                    value={this.state.password}
                />
                <TouchableOpacity onPress={this.signIn.bind(this)}>
                    <Text style={styles.signInBtnStyle}>SIGN IN NOW</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    textInputStyle: {
        height: 40,
        backgroundColor: main_text_color,
        borderColor: main_text_color,
        borderWidth: 1,
        borderRadius: 15,
        marginVertical: 10,
        paddingLeft: 20,
    },
    signInBtnStyle: {
        height: 40,
        color: main_text_color,
        borderColor: main_text_color,
        borderWidth: 1,
        borderRadius: 15,
        marginVertical: 10,
        padding: 10,
        paddingLeft: (screen_size.width - 40) / 2.6,
    },
});