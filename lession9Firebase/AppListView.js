import React, { Component } from 'react'
import { Text, View, StyleSheet, Button, TextInput, ListView } from 'react-native'
import FirebaseConfig from './components/FirebaseConfig'
import { TouchableOpacity } from 'react-native-gesture-handler';


export default class AppListView extends Component {
    constructor(props) {
        super(props)
        this.itemRef = FirebaseConfig.database()
        this.state = {
            text: '',
            dataSource: new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
        }
    }

    listenForItems = () => {
        let items = []
        this.itemRef.ref('QuanDoi').child('CapBac').on('child_added', dataSnapshot => {
            items.push({
                name: dataSnapshot.val().Ngonngu,
                _key: dataSnapshot.key
            })
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(items)
            })
        })
        
        this.itemRef.ref('QuanDoi').child('CapBac').on('child_removed', dataSnapshot => {
            items = items.filter(x => x._key !== dataSnapshot.key)
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(items)
            })
        })

    }

    componentDidMount = () => {
        this.listenForItems()
    }

    addDB = () => {
        this.itemRef.ref('QuanDoi').child('CapBac').push({
            Ngonngu: this.state.text
        })
        this.setState({ text: '' })
    }

    deleteDB = rowData => {
        this.itemRef.ref('QuanDoi').child('CapBac').child(rowData._key).remove()
        this.listenForItems()
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: '80%' }}
                    onChangeText={text => this.setState({ text })}
                    value={this.state.text}
                />
                <Button title="Add" onPress={this.addDB} />
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={rowData => <View style={{ borderWidth: 1, borderColor: 'gray', margin: 15 }}>
                        <Text style={{ color: 'red', fontSize: 30, padding: 15 }}>{rowData.name}</Text>
                        <Button title="Delete" onPress={() => this.deleteDB(rowData)} />
                    </View>
                    }
                />
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

