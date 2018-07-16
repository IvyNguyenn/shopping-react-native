import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import {
    layout_color, item_layout_color, shadow_color, main_suptext_color, line_color
    , screen_size, uri_api_product,
    banner_width, banner_height,
} from '../../../../Values';
import ic_plus from '../../../../Images/Icon/icons8_Plus_50px_1.png';
import ic_sub from '../../../../Images/Icon/icons8_Minus_50px.png';
import ic_del from '../../../../Images/Icon/icons8_Cancel_50px_1.png';
import global from '../../../global';

export default class CartProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quantity: 1,
        }
    }
    increaseQuantity(id) {
        global.increaseQuantity(id);
    }
    decreaseQuantity(id) {
        global.decreaseQuantity(id);
    }

    removeProductFromCart(id) {
        global.removeProductFromCart(id);
    }
    render() {
        const { cartItem } = this.props;
        console.log('==== CART PRODUCT ===== ' + cartItem);
        return (
            <View style={styles.container}>
                <Image source={{ uri: `${uri_api_product}${cartItem.product.images[0]}` }} style={styles.imageStyle} />
                <View style={{ justifyContent: 'space-between' }}>
                    <View>
                        <View style={styles.containerDelIcon}>
                            <Text>{cartItem.product.name.toUpperCase()}</Text>
                            <TouchableOpacity onPress={() => this.removeProductFromCart(cartItem.product.id)}>
                                <Image source={ic_del} style={styles.iconStyle} />
                            </TouchableOpacity>
                        </View>
                        <Text style={{ fontWeight: 'bold' }}>{cartItem.product.price} $</Text>
                    </View>
                    <View style={styles.containerQuantity}>
                        <TouchableOpacity onPress={() => this.decreaseQuantity(cartItem.product.id)}>
                            <Image source={ic_sub} style={styles.iconStyle} />
                        </TouchableOpacity>
                        <Text>{cartItem.quantity}</Text>
                        <TouchableOpacity onPress={() => this.increaseQuantity(cartItem.product.id)}>
                            <Image source={ic_plus} style={styles.iconStyle} />
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity onPress={() => { this.props.navigation.navigate('PRODUCT_DETAIL', { product: cartItem.product }) }} style={styles.containerRight}>
                        <Text style={styles.showDetailStyle}>SHOW DETAILS</Text>
                    </TouchableOpacity>
                </View>
            </View >
        );
    }
}
const width_boxInfo = screen_size.width - 50 - banner_height / 1.5;
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: item_layout_color,
        padding: 10,
        borderTopColor: line_color,
        borderTopWidth: 0.5,
    },
    containerDelIcon: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    containerRight: {
        width: width_boxInfo,
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    imageStyle: {
        width: banner_height / 1.5,
        height: banner_height / 1.5,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
    },
    showDetailStyle: {
        color: main_suptext_color,
        fontWeight: 'bold',
    },
    iconStyle: {
        width: 15,
        height: 15,
    },
    containerQuantity: {
        width: banner_height / 2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10,
    },

});
