import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import MapView from 'react-native-maps';
import {
    layout_color, item_layout_color, shadow_color,
    collection_item_height, screen_size, collection_item_image_height, collection_item_image_width,
    banner_width, banner_height, main_suptext_color, line_color,
} from '../../../../Values';
import ic_marker from '../../../../Images/Icon/icons8_Marker_50px.png';
import ic_phone from '../../../../Images/Icon/icons8_Phone_50px.png';
import ic_mail from '../../../../Images/Icon/icons8_Sent_50px.png';
import ic_facebook from '../../../../Images/Icon/icons8_Facebook_50px.png';

export default class Contact extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={{ width: screen_size.width - 40, height: 300, backgroundColor: 'blue' }}>
                </View>
                <View style={styles.containerInfo}>
                    <Image source={ic_marker} style={styles.iconStyle} />
                    <Text style={styles.textStyle}>199A Lê Văn Việt , Q.9 </Text>
                </View>
                <View style={styles.containerInfo}>
                    <Image source={ic_phone} style={styles.iconStyle} />
                    <Text style={styles.textStyle}>(+84) 0978543567 </Text>
                </View>
                <View style={styles.containerInfo}>
                    <Image source={ic_mail} style={styles.iconStyle} />
                    <Text style={styles.textStyle}>myshoes@gmail.com</Text>
                </View>
                <View style={styles.containerInfo}>
                    <Image source={ic_facebook} style={styles.iconStyle} />
                    <Text style={styles.textStyle}>https://www.facebook.com/pg/www.myshoes.vn/ </Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
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
    containerInfo: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderTopColor: line_color,
        borderTopWidth: 0.5,
        width: screen_size.width - 40,  
    },
    textStyle: {
        color: main_suptext_color,
        fontWeight: 'bold',
    },
    iconStyle: {
        width: 25,
        height: 25,
    },
    imageStyle: {
        width: banner_width,
        height: banner_height,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

