import React, { Component } from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'
export default class Login extends Component {
    static navigationOptions = {
        title: 'Login'
    }
    render() {
        const { navigate } = this.props.navigation

        return (
            <View style={styles.container}>
                <Button
                    title="Push me"
                    onPress={() => {
                        navigate('Register', { username: 'ThànhNa' })
                    }} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    }
});
