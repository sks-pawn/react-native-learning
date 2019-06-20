import React, { Component } from 'react'
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native'

import FirebaseConfig from '../FirebaseConfig'
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

    handlingLogin = async () => {
        let { navigate } = this.props.navigation
        try {
            let result = await FirebaseConfig.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            console.log(result)
            Alert.alert(
                'Alert Title',
                'Đăng nhập thành công: ' + result.user.email,
                [
                    {
                        text: 'Cancel',
                        onPress: () => console.log('Cancel Pressed'),
                        style: 'cancel',
                    },
                    { text: 'Login', onPress: () => navigate('GoWelcome') },
                ],
                { cancelable: false },
            );
        } catch (error) {
            Alert.alert(
                'Alert Title',
                'Đăng nhập thất bại' + " " + error.toString(),
                [
                    {
                        text: 'Cancel',
                        onPress: () => console.log('Cancel Pressed'),
                        style: 'cancel',
                    }
                ],
                { cancelable: false },
            );
        }
    }


    render() {
        let { navigate } = this.props.navigation

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
                        secureTextEntry={true}
                        style={styles.input}
                        onChangeText={(password) => this.setState({ password })}
                        value={this.state.password}
                    />
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity style={[styles.button, { backgroundColor: 'green' }]}
                            onPress={this.handlingLogin}>
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
