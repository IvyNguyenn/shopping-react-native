import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native';
import {
    layout_color, item_layout_color, shadow_color,
    collection_item_height, screen_size, collection_item_image_height, collection_item_image_width,
    banner_width, banner_height,
} from '../../../../Values';
import CartProduct from './CartProduct';


export default class Search extends Component {
    render() {
        var ListProduct = [];
        for (let i = 0; i < 5; i++) {
            ListProduct.push(
                <View style={styles.container}>
                    <CartProduct navigation={this.props.navigation} />
                </View>
            );
        }
        return (
            <ScrollView>
                {ListProduct}
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: item_layout_color,
        margin: 10,
        shadowColor: shadow_color,
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 1.0,
        elevation: 4,
        borderRadius: 2,
    },
    textStyle: {
        paddingVertical: 10,
        justifyContent: 'center',
    },
    imageStyle: {
        width: banner_width,
        height: banner_height,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

