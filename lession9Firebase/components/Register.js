import React, { Component } from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'

export default class Register extends Component {
    static navigationOptions = {
        title: 'Register'
    }
    render() {
        const { params } = this.props.navigation.state;
        const { goBack } = this.props.navigation
        return (
            <View style={styles.container}>
                <Text>
                    Register {params.username}
                </Text>
                <Button
                    title="Back"
                    onPress={() => {
                        goBack()
                    }}>

                </Button>
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
