import React, { Component } from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'

export default class Home extends Component {
    // static navigationOptions = {
    //     title: 'Home'
    // }

    render() {
        // const { navigate } = this.props.navigation

        return (
            <View style={styles.container} >
                {/* <Button
                    title="Push me"
                    onPress={() => {
                        navigate('Detail', { username: 'ThànhNa', mode: 'info' })
                    }} /> */}
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
