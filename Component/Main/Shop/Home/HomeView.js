import React, { Component } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { layout_color } from '../../../../Values';
import Collection from './Collection';
import Category from './Category';
import TopProduct from './TopProduct';

export default class HomeView extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Collection />
                    <Category navigation={this.props.navigation} />
                    <TopProduct navigation={this.props.navigation} />
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: layout_color,
    }
});
