import React, { Component } from 'react';
import { View, Text, Image, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';
import {
    layout_color, item_layout_color, shadow_color,
    collection_item_height, screen_size,
    banner_width, banner_height,
} from '../../../../Values';

export default class Category extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.textStyle}>LIST OF CATEGORY</Text>
                <View style={{ flex: 1, }}>
                    <Swiper width={banner_width} height={100}>
                        <TouchableOpacity onPress={() => { this.props.navigation.navigate('LIST_PRODUCT') }}>
                            <ImageBackground source={require('../../../../Images/Banner/sneaker.jpg')} style={styles.imageStyle} >
                                <Text>Sneaker2</Text>
                            </ImageBackground>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { this.props.navigation.navigate('LIST_PRODUCT') }}>
                            <ImageBackground source={require('../../../../Images/Banner/highheel.jpg')} style={styles.imageStyle} >
                                <Text>Sneaker</Text>
                            </ImageBackground>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { this.props.navigation.navigate('LIST_PRODUCT') }}>
                            <ImageBackground source={require('../../../../Images/Banner/sandals.jpg')} style={styles.imageStyle} >
                                <Text>Sneaker1</Text>
                            </ImageBackground>
                        </TouchableOpacity>
                    </Swiper>
                </View>
            </View >

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

    tittleCollection: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'gray',
    },
});
