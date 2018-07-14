import React, { Component } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { layout_color } from '../../../../Values';
import Collection from './Collection';
import Category from './Category';
import TopProduct from './TopProduct';

export default class HomeView extends Component {
    render() {
        const {state} = this.props.navigation;
        console.log("==== HOME VIEW ===== "+state.params.types);
        return (
            <View style={styles.container}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Collection />
                    <Category navigation={this.props.navigation} types={state.params.types}/>
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
