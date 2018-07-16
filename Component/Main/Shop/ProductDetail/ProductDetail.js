import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import {
    layout_color, item_layout_color, shadow_color,
    collection_item_height, screen_size, icon_height, icon_width,
    banner_width, banner_height, main_suptext_color, uri_api_product,
} from '../../../../Values';
import ic_back from '../../../../Images/Icon/icons8_Back_50px_1.png';
import ic_cart from '../../../../Images/Icon/icons8_Shopping_Cart_50px_3.png';
import global from '../../../global';

export default class ProductDetail extends Component {
    addThisProductToCart() {
        const { product } = this.props.navigation.state.params;
        global.addProductToCart(product);
        //global.updateBadge();
    }
    render() {
        const { product } = this.props.navigation.state.params;
        console.log('==== PRODUCT DETAIL ===== '+product);
        return (
            <ScrollView style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => { this.props.navigation.goBack() }}>
                        <Image source={ic_back} style={styles.iconStyle} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.addThisProductToCart.bind(this)}>
                        <Image source={ic_cart} style={styles.iconStyle} />
                    </TouchableOpacity>
                </View>
                <View>
                    <View style={{ alignItems: 'center' }}>
                        <Image source={{ uri: `${uri_api_product}${product.images[0]}` }} style={styles.imageStyle} />
                    </View>
                    <View style={styles.header} >
                        <Text style={styles.nameStyle}>{product.name.toUpperCase()}</Text>
                        <Text style={styles.priceStyle}>{product.price} $</Text>
                    </View>
                    <Text style={styles.descriptionStyle}>{product.description}</Text>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
    },
    container: {
        flex: 1,
        backgroundColor: item_layout_color,
        margin: 10,
        shadowColor: shadow_color,
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 1.0,
        elevation: 4,
        paddingHorizontal: 10,
        borderRadius: 2,
    },
    nameStyle: {
        fontSize: 17,
        maxWidth: screen_size.width / 1.7,
    },
    priceStyle: {
        color: main_suptext_color,
        fontSize: 20,
        fontWeight: 'bold',
    },
    iconStyle: {
        width: icon_width,
        height: icon_height,
    },
    imageStyle: {
        width: banner_height,
        height: banner_height,
        justifyContent: 'center',
        alignItems: 'center',
    },
    descriptionStyle: {
        padding: 10,
        borderTopWidth: 1,
        borderTopColor: '#d7dbdd',
    },
});
