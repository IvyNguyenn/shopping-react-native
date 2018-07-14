import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import {
    layout_color, item_layout_color, shadow_color,
    collection_item_height, screen_size, main_color,
} from '../../../../Values';

export default class Product extends Component {
    render() {
        return (
            <TouchableOpacity onPress={() => { this.props.navigation.navigate('PRODUCT_DETAIL') }} style={styles.container}>
                <Image source={{ uri: 'https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-9/36983630_2286776524696308_8835217949481500672_n.jpg?_nc_cat=0&oh=2f7b81646fb2ea7443331e5110d4e5cc&oe=5BD3546C' }} style={styles.imageStyle} />
                <Text style={styles.productName}>Product name</Text>
                <Text style={styles.productPrice}>0.00 $</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 3,
        marginHorizontal: 10,
        marginBottom: 20,
        shadowColor: shadow_color,
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 1.0,
        elevation: 1,
    },
    productName: {
        margin: 5,
    },
    productPrice: {
        fontSize: 15,
        color: main_color,
        marginHorizontal: 5,
        marginBottom: 5,
    },
    imageStyle: {
        width: (screen_size.width - 85) / 2,
        height: (screen_size.width - 85) / 2,
        fontWeight: 'bold',
    },
});