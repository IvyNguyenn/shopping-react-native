import React, { Component } from 'react';
import { View, Button, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import { main_color, app_name, light_gray } from '../../Values';
import avatar from '../../Images/Banner/user.png';
import global from '../global';
import RemoveToken from '../../api/RemoveToken';

export default class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null,
        }
        global.onSignIn = this.onSignIn.bind(this);
        global.onSignOut = this.onSignOut.bind(this);
    }
    onSignIn(user) {
        this.setState({ user: user });
    }
    onSignOut() {
        this.setState({ user: null });
        RemoveToken()
            .catch(error => console.log("REMOVE TOKEN ERROR " + error));
    }
    render() {
        const LogoutJSX = (
            <View style={styles.container}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate("AUTHENTICATION")} >
                    <Text style={styles.textButtonStyle}>Sign in</Text>
                </TouchableOpacity>
            </View>
        );

        const LoginJSX = (
            <View style={styles.container}>
                <View style={styles.containerAlignCenter}>
                    <Image source={avatar} style={styles.imageStyle} />
                    <Text style={styles.usernameStyle}>{this.state.user ? this.state.user.name : ''}</Text>
                </View>
                <View >
                    <TouchableOpacity onPress={() => this.props.navigation.navigate("ORDER_HISTORY")}>
                        <Text style={styles.textButtonStyle}>Order history</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate("CHANGE_INFO", { user: this.state.user })}>
                        <Text style={styles.textButtonStyle}>Change info</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.onSignOut.bind(this)}>
                        <Text style={styles.textButtonStyle}>Sign out</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
        const mainJSX = this.state.user ? LoginJSX : LogoutJSX;
        return (
            <View style={{ flex: 1 }}>
                {mainJSX}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        backgroundColor: main_color,
        padding: 10,
    },
    containerAlignCenter: {
        alignItems: 'center',
    },
    rowStyle: {
        marginVertical: 5,
    },
    imageStyle: {
        width: 150,
        height: 150,
        borderColor: 'white',
        borderRadius: 100,
        borderWidth: 0.8,
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
        padding: 20,
    },
});
