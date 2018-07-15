import React, { Component } from 'react';
import { View, Text, StyleSheet, ListView,TouchableOpacity,Image } from 'react-native';
import {
    layout_color, item_layout_color, shadow_color,uri_api_product,main_color,
    collection_item_height, screen_size, collection_item_image_height, collection_item_image_width,
} from '../../../../Values';

export default class TopProduct extends Component {
    render() {
        const { topProducts } = this.props;
        console.log('===== TOP PRODUCT =====' + topProducts);
        return (
            <View style={styles.container}>
                <Text style={styles.textStyle}>TOP PRODUCT</Text>
                <ListView
                    contentContainerStyle={styles.productContainer}
                    dataSource={new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 }).cloneWithRows(topProducts)}
                    renderRow={product => (
                        <TouchableOpacity onPress={() => { this.props.navigation.navigate('PRODUCT_DETAIL', { product: product }) }} style={styles.container2}>
                            <Image source={{ uri: `${uri_api_product}${product.images[0]}` }} style={styles.imageStyle} />
                            <Text style={styles.productName}>{product.name.toUpperCase()}</Text>
                            <Text style={styles.productPrice}>{product.price} $</Text>
                        </TouchableOpacity>
                    )}
                    renderSeparator={(sectionId, rowId)=>{
                        if(rowId % 2 == 1) return <View style={{screen_size,height:10}}/>;
                        return null;
                    }}
                />
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
    container2: {
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