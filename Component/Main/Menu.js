import React, { Component } from 'react';
import { View, Button, StyleSheet, Image ,Text} from 'react-native'
import { main_color, app_name, light_gray } from '../../Values';
import avatar from '../../Images/Icon/icons8_User_50px_1.png';

export default class Menu extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.containerAlignCenter}>
                    <Image source={avatar} style={styles.imageStyle} />
                    <Text>Username</Text>
                </View>
                <View style={styles.containerCenter}>
                    <View style={styles.rowStyle}>
                        <Button
                            title='go to authentication'
                            onPress={() => this.props.navigation.navigate("AUTHENTICATION")}
                        />
                    </View>
                    <View style={styles.rowStyle}>
                        <Button
                            title='go to change_info'
                            onPress={() => this.props.navigation.navigate("CHANGE_INFO")}
                        />
                    </View>
                    <View style={styles.rowStyle}>
                        <Button
                            title='go to order history'
                            onPress={() => this.props.navigation.navigate("ORDER_HISTORY")}
                        />
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: light_gray,
        padding: 10,
    },
    containerCenter: {
        backgroundColor: light_gray,
        justifyContent: 'center',
        padding: 10,
    },
    containerAlignCenter: {
        alignItems: 'center',
        marginVertical: 100,
    },
    rowStyle: {
        marginVertical: 5,
    },
    imageStyle: {
        width: 100,
        height: 100,
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
    }
});
