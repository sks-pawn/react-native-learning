import React, { Component } from 'react'
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Alert, Button } from 'react-native'
import FirebaseConfig from '../FirebaseConfig'

export default class Register extends Component {
    static navigationOptions = {
        title: 'Register'
    }

    constructor(props) {
        super(props)

        this.state = {
            email: "",
            password: ""
        }
    }

    handlingRegister = async () => {
        try {
            const { navigate } = this.props.navigation
            let result = await FirebaseConfig.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
            Alert.alert(
                'Alert Title',
                'Đăng ký thành công: ' + result.user.email,
                [
                    {
                        text: 'Cancel',
                        onPress: () => console.log('Cancel Pressed'),
                        style: 'cancel',
                    },
                    { text: 'Login', onPress: () => navigate('Login') },
                ],
                { cancelable: false },
            );
            this.setState({ email: '', password: '' })
            return
        } catch (error) {
            console.log('error', error)
            Alert.alert(
                'Alert Title',
                'Đăng ký thất bại' + " " + error.toString(),
                [
                    {
                        text: 'Cancel',
                        onPress: () => console.log('Cancel Pressed'),
                        style: 'cancel',
                    }
                ],
                { cancelable: false }
            );
        }
    }

    render() {
        const { params } = this.props.navigation.state;
        const { goBack } = this.props.navigation
        return (
            <View style={styles.container}>
                <Text style={{ color: 'blue', fontSize: 40 }}>REGISTER</Text>
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
                            onPress={() => this.handlingRegister()}>
                            <Text>Submit</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.button, { backgroundColor: 'grey' }]}
                            onPress={() => {
                                goBack()
                            }}>
                            <Text>Back</Text>
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

