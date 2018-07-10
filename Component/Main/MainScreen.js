import React, { Component } from 'react'
import { View, Text, StyleSheet, Button, Image, Dimensions, TouchableOpacity } from 'react-native'
import TabNavigator from 'react-native-tab-navigator';
import Drawer from 'react-native-drawer';
import { main_color, app_name, } from '../../Values';
import ic_logo from '../../Images/Icon/icons8_Trainers_50px_1.png';
import ic_menu from '../../Images/Icon/icons8_Menu_50px_1.png';
import HomeScreen from './HomeScreen';
import Menu from './Menu';
import Shop from './Shop/Shop'

const { screen_height } = Dimensions.get('window');

export default class MainScreen extends Component {
    
    closeControlPanel = () => {
        this._drawer.close()
    };
    openControlPanel = () => {
        this._drawer.open()
    };

    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'Home',
        }
    }

    render() {
        const {navigation} = this.props;
        return (
            <View style={{ flex: 1 }}>
                <Drawer
                    openDrawerOffset={0.4}
                    tapToClose={true}
                    ref={(ref) => this._drawer = ref}
                    content={
                        <Menu navigation = {navigation}/>
                    }
                >

                    {/* main view */}
                    <View style={{ flex: 1, }}>
                        <Shop open={this.openControlPanel}/>
                    </View>
                </Drawer>
            </View>
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