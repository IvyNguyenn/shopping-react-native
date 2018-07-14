import React, { Component } from 'react';
import { View, Text, Button, Image, StyleSheet, TouchableOpacity } from 'react-native';
import {
    layout_color, item_layout_color, shadow_color,
    collection_item_height, screen_size, collection_item_image_height, collection_item_image_width,
    banner_width, banner_height, icon_height, icon_width, main_color, main_suptext_color,
} from '../../Values';
import ic_menu from '../../Images/Icon/icons8_Back_50px.png';


export default class OrderHistory extends Component {
    render() {
        return (
            <View>
                <View style={styles.hearder}>
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                        <Image style={styles.iconStyle} source={ic_menu} />
                    </TouchableOpacity>
                    <Text style={styles.titleStyle}>ORDER HISTORY</Text>

                </View>
                <View style={styles.container}>
                    <View style={styles.contentStyle}>
                        <Text>Order id:</Text>
                        <Text style={{ color: main_color }}>123456789</Text>
                    </View>
                    <View style={styles.contentStyle}>
                        <Text>Order time:</Text>
                        <Text style={{ color: main_suptext_color }}>14/07/2018 14:46</Text>
                    </View>
                    <View style={styles.contentStyle}>
                        <Text>Status:</Text>
                        <Text style={{ color: main_color }}>ordered</Text>
                    </View>
                    <View style={styles.contentStyle}>
                        <Text>Total:</Text>
                        <Text style={{ color: main_suptext_color, fontWeight: 'bold' }}>3200 $</Text>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    hearder: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: main_color,
        height: screen_size.height / 12,
        padding: 12,
    },
    iconStyle: {
        width: icon_width,
        height: icon_height,
    },
    titleStyle: {
        color: 'white',
        fontSize: 15,
    },
    container: {
        backgroundColor: item_layout_color,
        margin: 10,
        shadowColor: shadow_color,
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 1.0,
        elevation: 4,
        padding: 10,
        borderRadius: 2,
    },
    contentStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 5,
    },

});