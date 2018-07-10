import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput, Button, Image, Dimensions, TouchableOpacity } from 'react-native'
import TabNavigator from 'react-native-tab-navigator';
import Drawer from 'react-native-drawer';
import { main_color, app_name, } from '../../../Values';
import ic_logo from '../../../Images/Icon/icons8_Trainers_50px_1.png';
import ic_menu from '../../../Images/Icon/icons8_Menu_50px_1.png';
import ic_home from '../../../Images/Icon/icons8_Home_50px_9.png';
import ic_home_selected from '../../../Images/Icon/icons8_Home_50px_10.png';
import ic_cart from '../../../Images/Icon/icons8_Shopping_Cart_50px.png';
import ic_cart_selected from '../../../Images/Icon/icons8_Shopping_Cart_50px_1.png';
import ic_search from '../../../Images/Icon/icons8_Search_50px.png';
import ic_search_selected from '../../../Images/Icon/icons8_Search_50px_1.png';
import ic_contact from '../../../Images/Icon/icons8_User_50px.png';
import ic_contact_selected from '../../../Images/Icon/icons8_User_50px_1.png';
import Home from './Home/Home';
import Cart from './Cart/Cart';
import Search from './Search/Search';
import Contact from './Contact/Contact';
const { screen_height } = Dimensions.get('window');

export default class Shop extends Component {
    openMenu() {
        const { open } = this.props;
        open();
    }
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'Home',
            text: ''
        }
    }

    render() {
        return (
            <View style={{ flex: 1, }}>
                <View style={styles.hearder}>
                    <View style={styles.hearder2}>
                        <TouchableOpacity onPress={this.openMenu.bind(this)}>
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
                <TabNavigator>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'Home'}
                        title="Home"
                        renderIcon={() => <Image source={ic_home} style={styles.iconStyle}/>}
                        renderSelectedIcon={() => <Image source={ic_home_selected} style={styles.iconStyle} />}
                        onPress={() => this.setState({ selectedTab: 'Home' })}>
                        <Home />
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'Cart'}
                        title="Cart"
                        renderIcon={() => <Image source={ic_cart} style={styles.iconStyle}/>}
                        renderSelectedIcon={() => <Image source={ic_cart_selected} style={styles.iconStyle} />}
                        badgeText="12"
                        onPress={() => this.setState({ selectedTab: 'Cart' })}>
                        <Cart />
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'Search'}
                        title="Search"
                        renderIcon={() => <Image source={ic_search} style={styles.iconStyle}/>}
                        renderSelectedIcon={() => <Image source={ic_search_selected} style={styles.iconStyle} />}
                        onPress={() => this.setState({ selectedTab: 'Search' })}>
                        <Search />
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'Contact'}
                        title="Contact"
                        renderIcon={() => <Image source={ic_contact} style={styles.iconStyle}/>}
                        renderSelectedIcon={() => <Image source={ic_contact_selected} style={styles.iconStyle} />}
                        onPress={() => this.setState({ selectedTab: 'Contact' })}>
                        <Contact />
                    </TabNavigator.Item>
                </TabNavigator>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    hearder: {
        backgroundColor: main_color,
        height: screen_height / 8,
        justifyContent: 'space-around',
        padding: 10,
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
        width: 25,
        height: 25
    },
    titleStyle: {
        color: 'white',
        fontSize: 15,
    },

});