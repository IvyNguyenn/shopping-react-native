import React, { Component } from 'react';
import { View, Text, Button, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import {
    layout_color, item_layout_color, shadow_color,
    collection_item_height, screen_size, icon_height, icon_width,
    banner_width, banner_height, line_color, main_color,
} from '../../../../Values';
import ProductItem from './ProductItem';


export default class ListProduct extends Component {
    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.header}>
                        <TouchableOpacity onPress={() => { this.props.navigation.goBack() }}>
                            <Image source={require('../../../../Images/Icon/icons8_Back_50px_1.png')} style={styles.iconStyle} />
                        </TouchableOpacity>
                        <Text style={styles.titleStyle}>Sneakers</Text>
                        <View style={styles.iconStyle} />
                    </View>

                    <ProductItem navigation={this.props.navigation} />
                    <ProductItem navigation={this.props.navigation} />
                    <ProductItem navigation={this.props.navigation} />
                    <ProductItem navigation={this.props.navigation} />

                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
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
    titleStyle: {
        fontSize: 20,
        color: main_color,
        justifyContent: 'center',
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
    productInfoStyle: {
        padding: 10,
        borderTopWidth: 1,
        borderTopColor: line_color,
    },
});
