import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {
    layout_color, item_layout_color, shadow_color,
    collection_item_height, screen_size, collection_item_image_height, collection_item_image_width,
} from '../../../../Values';
import Product from './Product';


export default class TopProduct extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.textStyle}>TOP PRODUCT</Text>
                <View style={styles.productContainer}>
                    <Product navigation={this.props.navigation} />
                    <Product navigation={this.props.navigation} />
                    
                </View >
            </View>
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
        paddingHorizontal: 10,
        borderRadius: 2,
    },
    textStyle: {
        paddingVertical: 10,
        justifyContent: 'center',
    },
    productContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
});