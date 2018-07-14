import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import {
    layout_color, item_layout_color, shadow_color,
    collection_item_height, screen_size, collection_item_image_height, collection_item_image_width,
    banner_width, banner_height,
} from '../../../../Values';


export default class Collection extends Component {
    render() {
        return (
            <TouchableOpacity style={styles.container}>
                <Text style={styles.textStyle}>NEW COLLECTION</Text>
                <Image source={require('../../../../Images/Banner/newfootwear.jpg')} style={styles.imageStyle} />
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: collection_item_height,
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
    imageStyle: {
        width: banner_width,
        height: banner_height,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
