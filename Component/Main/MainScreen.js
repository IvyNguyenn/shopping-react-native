import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, Image, Dimensions, TouchableOpacity } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import Drawer from 'react-native-drawer';
import { main_color, app_name, } from '../../Values';
import Menu from './Menu';
import Shop from './Shop/Shop';
import CheckLogin from '../../api/CheckLogin';
import GetToken from '../../api/GetToken';
import global from '../global';

const { screen_height } = Dimensions.get('window');
const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6InZ5MTIzQGdtYWlsLmNvbSIsImlhdCI6MTUzMTc1NTAyNywiZXhwaXJlIjoxNTMxOTI3ODI3fQ.NC3UqU9I1UpfGDo4_XEw_THpSFH3TpaSE2HeBrEyWvI';
export default class MainScreen extends Component {

    closeControlPanel = () => {
        this._drawer.close()
    };
    openControlPanel = () => {
        this._drawer.open()
    };
    componentDidMount() {
        GetToken()
            .then(token => CheckLogin(token))
            .then(res => global.onSignIn(res.user))
            .catch(error => console.log(" CHECK TOKEN ERROR " + error))
        console.log("GET TOKEN 2 =========");
    }
    render() {
        const { navigation } = this.props;
        return (
            <Drawer
                openDrawerOffset={0.4}
                tapToClose={true}
                ref={(ref) => this._drawer = ref}
                content={<Menu navigation={navigation} />}
            >
                {/* main view */}
                <Shop open={this.openControlPanel} />
            </Drawer>
        );
    }
}

const styles = StyleSheet.create({
    container1: {
        flex: 1,
        backgroundColor: 'pink',
    },
    container2: {
        flex: 1,
        backgroundColor: 'red',
    },
    container: {
        flex: 1,
    },
    hearder: {
        backgroundColor: main_color,
        height: screen_height / 8,
    },
    hearder2: {
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    textInputStyle: {
        height: 40,
        color: 'white',
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 5,
    }

});