import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import {
    layout_color, item_layout_color, shadow_color, main_suptext_color, line_color
    , screen_size,
    banner_width, banner_height,
} from '../../../../Values';
import ic_plus from '../../../../Images/Icon/icons8_Plus_50px_1.png';
import ic_sub from '../../../../Images/Icon/icons8_Minus_50px.png';
import ic_del from '../../../../Images/Icon/icons8_Cancel_50px_1.png';

export default class ProductItem extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image source={require('../../../../Images/Banner/giay_the_thao.jpg')} style={styles.imageStyle} />
                <View style={{ justifyContent: 'space-between' }}>
                    <View>
                        <View style={styles.containerDelIcon}>
                            <Text>prosuct 's name</Text>
                            <View style={{ width: width_boxInfo - 100, flexDirection: 'row', justifyContent: 'flex-end', }}>
                                <TouchableOpacity>
                                    <Image source={ic_del} style={styles.iconStyle} />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <Text>0.00 $</Text>
                    </View>
                    <View style={styles.containerQuantity}>
                        <TouchableOpacity>
                            <Image source={ic_sub} style={styles.iconStyle} />
                        </TouchableOpacity>
                        <Text>2</Text>
                        <TouchableOpacity>
                            <Image source={ic_plus} style={styles.iconStyle} />
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity onPress={() => { this.props.navigation.navigate('PRODUCT_DETAIL') }} style={styles.containerRight}>
                        <Text style={styles.showDetailStyle}>SHOW DETAILS</Text>
                    </TouchableOpacity>
                </View>
            </View >
        );
    }
}
const width_boxInfo = screen_size.width - 50 - banner_height / 1.5;
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: item_layout_color,
        padding: 10,
        borderTopColor: line_color,
        borderTopWidth: 0.5,
    },
    containerDelIcon: {
        flexDirection: 'row',
    },
    containerRight: {
        width: width_boxInfo,
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
    iconStyle: {
        width: 15,
        height: 15,
    },
    containerQuantity: {
        width: banner_height / 2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10,
    },

});
