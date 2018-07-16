import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import { layout_color } from '../../../../Values';
import Collection from './Collection';
import Category from './Category';
import TopProduct from './TopProduct';

export default class HomeView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            types: [],
            products: [],
        }
    }
    
    render() {
        const { types, products } = this.state;
        console.log("==== HOME VIEW ===== " + types);
        return (
            <View style={styles.container}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Collection />
                    <Category navigation={this.props.navigation} types={types} />
                    <TopProduct navigation={this.props.navigation} topProducts={products} />
                </ScrollView>
            </View>
        );
    }
    componentDidMount(){
        fetch('http://192.168.56.1:88/api/')
            .then(response => response.json())
            .then(responseJson => {
                this.setState({
                    types: responseJson.type,
                    products: responseJson.product,
                });
                console.log("====== Home View Did Mount ===== "+this.state.types);
            })
            .catch((error) => { console.log("error ========= HOME VIEW " + error) });
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: layout_color,
    }
});
