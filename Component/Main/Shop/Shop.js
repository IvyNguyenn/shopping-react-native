import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Image, Dimensions, TouchableOpacity } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import Drawer from 'react-native-drawer';
import { main_color, screen_height } from '../../../Values';
import ic_home from '../../../Images/Icon/icons8_Home_50px_11.png';
import ic_home_selected from '../../../Images/Icon/icons8_Home_50px_10.png';
import ic_cart from '../../../Images/Icon/icons8_Shopping_Cart_50px_2.png';
import ic_cart_selected from '../../../Images/Icon/icons8_Shopping_Cart_50px_1.png';
import ic_search from '../../../Images/Icon/icons8_Search_50px_2.png';
import ic_search_selected from '../../../Images/Icon/icons8_Search_50px_1.png';
import ic_contact from '../../../Images/Icon/icons8_User_50px_2.png';
import ic_contact_selected from '../../../Images/Icon/icons8_User_50px_1.png';
import Home from './Home/Home';
import Cart from './Cart/Cart';
import Search from './Search/Search';
import Contact from './Contact/Contact';
import Header from './Header';
//const { screen_height } = Dimensions.get('window');

export default class Shop extends Component {
    openMenu() {
        const { open } = this.props;
        open();
    }
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'Home',
            text: '',
            types:[],
        }
    }
    componentDidMount(){
        fetch('http://192.168.56.1:88/api/')
        .then(response => response.json())
        .then(responseJson => {
            this.setState({types:responseJson.type});
        })
        .catch((error)=>{console.log("errorrrrrrrrrrrrrrrrrrrrrr"+error)});
    }

    render() {
        const {types, selectedTab} = this.state;
        return (
            <View style={{ flex: 1, }}>
                <Header onOpenMenu={this.openMenu.bind(this)} />
                <TabNavigator>
                    <TabNavigator.Item
                        selected={selectedTab === 'Home'}
                        title="Home"
                        renderIcon={() => <Image source={ic_home} style={styles.iconStyle} />}
                        renderSelectedIcon={() => <Image source={ic_home_selected} style={styles.iconStyle} />}
                        selectedTitleStyle={{ color: main_color }}
                        onPress={() => this.setState({ selectedTab: 'Home' })}>
                        <Home types = {types}/>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={selectedTab === 'Cart'}
                        title="Cart"
                        renderIcon={() => <Image source={ic_cart} style={styles.iconStyle} />}
                        renderSelectedIcon={() => <Image source={ic_cart_selected} style={styles.iconStyle} />}
                        badgeText="99"
                        selectedTitleStyle={{ color: main_color }}
                        onPress={() => this.setState({ selectedTab: 'Cart' })}>
                        <Cart />
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={selectedTab === 'Search'}
                        title="Search"
                        renderIcon={() => <Image source={ic_search} style={styles.iconStyle} />}
                        renderSelectedIcon={() => <Image source={ic_search_selected} style={styles.iconStyle} />}
                        selectedTitleStyle={{ color: main_color }}
                        onPress={() => this.setState({ selectedTab: 'Search' })}>
                        <Search />
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={selectedTab === 'Contact'}
                        title="Contact"
                        renderIcon={() => <Image source={ic_contact} style={styles.iconStyle} />}
                        renderSelectedIcon={() => <Image source={ic_contact_selected} style={styles.iconStyle} />}
                        selectedTitleStyle={{ color: main_color }}
                        onPress={() => this.setState({ selectedTab: 'Contact' })}>
                        <Contact />
                    </TabNavigator.Item>
                </TabNavigator>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    iconStyle: {
        width: 25,
        height: 25
    },
    titleStyle: {
        color: 'white',
        fontSize: 15,
    },

});