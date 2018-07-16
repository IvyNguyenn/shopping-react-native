import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView, ListView ,Alert} from 'react-native';
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
import Shop from '../Header';

export default class CartView extends Component {
    render() {
        const { cartArray } = this.props;
        console.log('===== CART VIEW ===== ' + cartArray);
        if (cartArray.length === 0) {
            console.log('---- empty cart -------- '+cartArray.length);
            Alert.alert(
                'Warning',
                'Empty cart',
                [
                  {text: 'Go Shopping', onPress: () => console.log('OK Pressed')},
                ],
              )
        }
        const priceArray = cartArray.map(cartItem => cartItem.product.price * cartItem.quantity);
        const totalPrice = priceArray.reduce((total, price) => { return total += price }, 0);
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
                    <Text style={styles.textStyle}>TOTAL {totalPrice} $ CHECKOUT NOW</Text>
                </TouchableOpacity>
            </View>
        );
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

