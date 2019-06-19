import React, { Component } from 'react'
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
export default class Login extends Component {
    static navigationOptions = {
        title: 'Login'
    }

    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: ""
        }
    }


    render() {
        const { navigate } = this.props.navigation

        return (
            <View style={styles.container}>
                <Text style={{ color: 'blue', fontSize: 40 }}>LOGIN</Text>
                <View style={[styles.container, { width: '100%' }]}>
                    <TextInput
                        style={styles.input}
                        onChangeText={(email) => this.setState({ email })}
                        value={this.state.email}
                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(password) => this.setState({ password })}
                        value={this.state.password}
                    />
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity style={[styles.button, { backgroundColor: 'green' }]}>
                        <Text>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, { backgroundColor: 'grey' }]}
                        onPress={() => {
                            navigate('Register', { username: 'ThànhNa' })
                        }} >
                        <Text>Register</Text>
                    </TouchableOpacity>
                </View>
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
