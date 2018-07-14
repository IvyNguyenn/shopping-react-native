import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import {
    layout_color, item_layout_color, shadow_color,
    collection_item_height, screen_size, icon_height, icon_width,
    banner_width, banner_height, main_suptext_color,
} from '../../../../Values';

export default class ProductDetail extends Component {
    render() {
        return (
            <ScrollView style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => { this.props.navigation.goBack() }}>
                        <Image source={require('../../../../Images/Icon/icons8_Back_50px_1.png')} style={styles.iconStyle} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={require('../../../../Images/Icon/icons8_Shopping_Cart_50px_3.png')} style={styles.iconStyle} />
                    </TouchableOpacity>
                </View>
                <View style={{ alignItems: 'center' }}>
                    <Image source={require('../../../../Images/Banner/36798876_2280436378663656_37388901492457472_n.jpg')} style={styles.imageStyle} />
                </View>
                <View style={styles.header} >
                    <Text style={styles.nameStyle}>Product 's name Product 's name Product 's name</Text>
                    <Text style={styles.priceStyle}>43.000 VNĐ</Text>
                </View>
                <Text style={styles.descriptionStyle}>Prosuct infomation Prosuct infomation Prosuct infomation Prosuct infomation Prosuct infomation
                Prosuct infomation Prosuct infomation Prosuct infomation Prosuct infomation Prosuct infomation
                </Text>
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
