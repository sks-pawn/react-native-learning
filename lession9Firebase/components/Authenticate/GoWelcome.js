import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default class GoWelcome extends Component {
    static navigationOptions = {
        title: 'GoWelcome'
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={{ fontSize: 30 }}>Go welcome</Text>
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
    },
    input: { height: 40, width: '80%', borderColor: 'gray', borderWidth: 1 },
    button: { color: '#fff', padding: 10 }
});

