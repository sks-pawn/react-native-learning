import React, { Component } from 'react'
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native'
import FirebaseConfig from './FirebaseConfig'

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
    submitRegister = async () => {
        const { navigate } = this.props.navigation
        FirebaseConfig.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then(result => {
            console.log('111111111111111111')
            Alert.alert(
                'Alert Title',
                'Đăng ký thành công',
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
        }).catch((err) => {
            Alert.alert(
                'Alert Title',
                'Đăng ký thất bại' + " " + err.toString(),
                [
                    {
                        text: 'Cancel',
                        onPress: () => console.log('Cancel Pressed'),
                        style: 'cancel',
                    }
                ],
                { cancelable: false },
            );
        });

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
                        style={styles.input}
                        onChangeText={(password) => this.setState({ password })}
                        value={this.state.password}
                    />
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity style={[styles.button, { backgroundColor: 'green' }]}
                        onPress={this.submitRegister}>
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

