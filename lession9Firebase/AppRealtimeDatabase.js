import React, { Component } from 'react'
import { Text, View, StyleSheet, Button, TextInput, ListView } from 'react-native'
import FirebaseConfig from './components/FirebaseConfig'


export default class AppRealtimeDatabase extends Component {
    constructor(props) {
        super(props)
        this.itemRef = FirebaseConfig.database()
        this.state = {
            text: ''
        }
    }
    setDB = () => {
        this.itemRef.ref('KhoaHoc').set({
            key: 'vvvvvvvvvvvvvv'
        })
    }

    pushDB = () => {
        this.itemRef.ref('KhoaHoc22').push({
            key: 'tessssst'
        })
    }

    pushChildDB = () => {
        this.itemRef.ref('KhoaHoc22').child('testChild').push({
            key: 'tessssst'
        })
    }

    onDb = () => {
        this.itemRef.ref('KhoaHoc').child('key').on('value', snapshot => {
            alert(snapshot.val())
        })
    }

    saveData = () => {
        this.itemRef.ref('TruongHoc').child('Lop1').push({
            tenLop: this.state.text
        })
        this.setState({ text: '' })
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={{ fontSize: 30, color: 'green' }}>Realtime db</Text>
                <View style={{ flexDirection: 'row' }}>
                    <Button title="setDB" onPress={this.setDB} />
                    <Button title="pushDB" onPress={this.pushDB} />
                    <Button title="pushChildDB" onPress={this.pushChildDB} />
                    <Button title="onDb" onPress={this.onDb} />
                </View>
                <View style={{ marginTop: 20, width: '100%' }}>
                    <TextInput
                        style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: '80%' }}
                        onChangeText={text => this.setState({ text })}
                        value={this.state.text}
                    />
                    <Button title="Save" onPress={this.saveData} />
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
    }
});

