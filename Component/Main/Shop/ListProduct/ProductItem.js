import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import {
    layout_color, item_layout_color, shadow_color, main_suptext_color, line_color, screen_size,
    banner_width, banner_height,
} from '../../../../Values';

export default class ProductItem extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image source={require('../../../../Images/Banner/giay_the_thao.jpg')} style={styles.imageStyle} />
                <View style={{ justifyContent: 'space-between' }}>
                    <View>
                        <Text>prosuct 's name</Text>
                        <Text>0.00 $</Text>
                    </View>
                    <TouchableOpacity onPress={() => { this.props.navigation.navigate('PRODUCT_DETAIL') }} style={styles.containerRight}>
                        <Text style={styles.showDetailStyle}>SHOW DETAILS</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: item_layout_color,
        padding: 10,
        borderTopColor: line_color,
        borderTopWidth: 0.5,
    },
    containerRight: {
        width: screen_size.width - 50 - banner_height / 1.5,
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
});
