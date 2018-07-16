import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import { main_color, main_text_color, app_name, icon_height, icon_width, screen_size } from '../../Values';
import Register from '../../api/Register';
import global from '../global';

export default class Authentication extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: 'v12345',
            name: 'vy12',
            password: '123',
            repassword: '123',
            phone: '',
            address: '',
        }
    }
    registerUser() {
        const { email, name, password } = this.state;
        Register(email, name, password)
            .then(response => {
                if (response === 'THANH_CONG') return this.onSuccess();
                return this.onFailure();    
            });
    }
    onSuccess() {
        Alert.alert(
            'Notice',
            'Sign up successed',
            [
                { text: 'OK', onPress: global.onSignIn() },
            ],
            { cancelable: false }
        )
    }
    onFailure() {
        Alert.alert(
            'Notice',
            'Sign up failed',
            [
                { text: 'Try again', onPress: this.setState({email:''}) },
            ],
            { cancelable: false }
        )
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
                    placeholder='Enter your name'
                    onChangeText={(name) => this.setState({ name })}
                    value={this.state.name}
                />
                <TextInput
                    style={styles.textInputStyle}
                    placeholder='Enter your password'
                    secureTextEntry
                    onChangeText={(password) => this.setState({ password })}
                    value={this.state.password}
                />
                <TextInput
                    style={styles.textInputStyle}
                    placeholder='Enter your password again'
                    secureTextEntry
                    onChangeText={(repassword) => this.setState({ repassword })}
                    value={this.state.repassword}
                />
                <TextInput
                    style={styles.textInputStyle}
                    placeholder='Enter your phone'
                    onChangeText={(phone) => this.setState({ phone })}
                    value={this.state.phone}
                />
                <TextInput
                    style={styles.textInputStyle}
                    placeholder='Enter your address'
                    onChangeText={(address) => this.setState({ address })}
                    value={this.state.text}
                />
                <TouchableOpacity onPress={this.registerUser.bind(this)}>
                    <Text style={styles.signInBtnStyle}>SIGN UP NOW</Text>
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