import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView, ListView } from 'react-native';
import {
    layout_color, item_layout_color, shadow_color,
    collection_item_height, screen_size, collection_item_image_height, collection_item_image_width,
    banner_width, banner_height, main_text_color, main_color,
} from '../../../../Values';
import { createStackNavigator, StackNavigator } from 'react-navigation';
import CartProduct from './CartProduct';
import ProductDetail from '../ProductDetail/ProductDetail';
import global from '../../../global';
import getCart from '../../../../api/GetCart';
import saveCart from '../../../../api/SaveCart';

export default class CartView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cartArray: [],
        };
        // global.addProductToCart = this.addProductToCart.bind(this);
        global.removeProductFromCart = this.removeProductFromCart.bind(this);
        global.increaseQuantity = this.increaseQuantity.bind(this);
        global.decreaseQuantity = this.decreaseQuantity.bind(this);
    }
    // addProductToCart(product) {
    //     this.setState(
    //         { cartArray: this.state.cartArray.concat({ product, quantity: 1 }) },
    //         () => saveCart(this.state.cartArray)
    //     );
    // }
    removeProductFromCart = async (productId) => {
        const newCart = this.state.cartArray.filter(p => p.product.id !== productId);
        await this.setState(
            { cartArray: newCart },
            () => saveCart(this.state.cartArray)
        );
        global.updateBadge();
    }
    increaseQuantity(productId) {
        const newCart = this.state.cartArray.map(p => {
            if (p.product.id !== productId) return p;
            return { product: p.product, quantity: p.quantity + 1 }
        });
        this.setState(
            { cartArray: newCart },
            () => saveCart(this.state.cartArray)
        );
    }
    decreaseQuantity(productId) {
        const newCart = this.state.cartArray.map(p => {
            if (p.product.id !== productId || p.quantity < 2) return p;
            return { product: p.product, quantity: p.quantity - 1 }
        });
        this.setState(
            { cartArray: newCart },
            () => saveCart(this.state.cartArray)
        );
    }
    render() {
        const { cartArray } = this.state;
        console.log('===== CART VIEW ===== ' + cartArray);
        return (
            <View style={styles.container} >
                <ListView
                    dataSource={new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 }).cloneWithRows(cartArray)}
                    renderRow={(cartItem) => (
                        <View style={styles.container_list}>
                            <CartProduct navigation={this.props.navigation} cartItem={cartItem} />
                        </View>
                    )}
                />
                <TouchableOpacity style={styles.container_checkout_btn}>
                    <Text style={styles.textStyle}>TOTAL 1000 $ CHECKOUT NOW</Text>
                </TouchableOpacity>
            </View>
        );
    }
    componentDidMount() {
        getCart()
            .then(cartArray => this.setState({ cartArray }));
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    container_list: {
        backgroundColor: item_layout_color,
        margin: 10,
        shadowColor: shadow_color,
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 1.0,
        elevation: 4,
        borderRadius: 2,
    },
    container_checkout_btn: {
        height: screen_size.width / 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 10,
        marginBottom: 10,
        backgroundColor: main_color,
    },
    textStyle: {
        color: main_text_color,
    },
});

