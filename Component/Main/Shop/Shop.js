import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Image, Dimensions, TouchableOpacity } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
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
import CartView from './Cart/CartView';
import Search from './Search/Search';
import Contact from './Contact/Contact';
import Header from './Header';
import global from '../../global';
import saveCart from '../../../api/SaveCart';
import getCart from '../../../api/GetCart';

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
            types: [],
            products: [],
            cartArray: [],
        };
        global.addProductToCart = this.addProductToCart.bind(this);
        global.cartList = this.props.cartArray;
    }

    componentDidMount() {
        fetch('http://192.168.56.1:88/api/')
            .then(response => response.json())
            .then(responseJson => {
                this.setState({
                    types: responseJson.type,
                    products: responseJson.product,
                });
            })
            .catch((error) => { console.log("error ======== SHOP " + error) });
        getCart()
            .then(cartArray => this.setState({ cartArray }));
    }

    addProductToCart(product) {
        this.setState(
            { cartArray: this.state.cartArray.concat({ product, quantity: 1 }) },
            () => saveCart(this.state.cartArray)
        );
    }

    render() {
        const { types, selectedTab, products, cartArray } = this.state;
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
                        <Home types={types} products={products} />
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={selectedTab === 'Cart'}
                        title="Cart"
                        renderIcon={() => <Image source={ic_cart} style={styles.iconStyle} />}
                        renderSelectedIcon={() => <Image source={ic_cart_selected} style={styles.iconStyle} />}
                        badgeText={cartArray.length}
                        selectedTitleStyle={{ color: main_color }}
                        onPress={() => this.setState({ selectedTab: 'Cart' })}>
                        <CartView cartArray={cartArray} />
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