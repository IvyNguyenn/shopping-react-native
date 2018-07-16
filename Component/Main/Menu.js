import React, { Component } from 'react';
import { View, Button, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import { main_color, app_name, light_gray } from '../../Values';
import avatar from '../../Images/Icon/icons8_User_50px_2.png';
import global from '../global';

export default class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogin: false,
        }
        global.onSignIn = this.onSignIn.bind(this);
        global.onSignOut = this.onSignOut.bind(this);
    }
    onSignIn() {
        this.setState({ isLogin: true });
    }
    onSignOut() {
        this.setState({ isLogin: false });
    }
    render() {
        const LogoutJSX = (

            <View style={styles.containerCenter}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate("AUTHENTICATION")} >
                    <Text style={styles.textButtonStyle}>Sign in</Text>
                </TouchableOpacity>
            </View>
        );

        const LoginJSX = (

            <View style={styles.containerCenter}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate("ORDER_HISTORY")}>
                    <Text style={styles.textButtonStyle}>Order history</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate("CHANGE_INFO")}>
                    <Text style={styles.textButtonStyle}>Change info</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { this.props.navigation.navigate('AUTHENTICATION') }}>
                    <Text style={styles.textButtonStyle}>Sign out</Text>
                </TouchableOpacity>
            </View>
        );
        const mainJSX = this.state.isLogin ? LoginJSX : LogoutJSX;
        return (
            <View style={styles.container}>
                <View style={styles.containerAlignCenter}>
                    <Image source={avatar} style={styles.imageStyle} />
                    <Text style={styles.usernameStyle}>Username</Text>
                </View>
                {mainJSX}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: main_color,
        padding: 10,
    },
    containerCenter: {
        justifyContent: 'center',
    },
    containerAlignCenter: {
        alignItems: 'center',
        marginVertical: 100,
    },
    rowStyle: {
        marginVertical: 5,
    },
    imageStyle: {
        width: 100,
        height: 100,
        borderColor: 'white',
        borderRadius: 100,
    },
    textButtonStyle: {
        backgroundColor: 'white',
        color: main_color,
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 15,
        marginVertical: 5,

    },
    usernameStyle: {
        color: 'white',
        fontSize: 20,
    },
});
