import React, { Component } from 'react';
import {
    Text,
    TextInput,
    Platform,
    Dimensions
} from 'react-native';
import Modal from 'react-native-modalbox'
import Button from 'react-native-button'

import { insertDataFromServer } from '../networking/Server'
const screen = Dimensions.get('window')

export default class AddModal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            nameItem: '',
            descriptionItem: ''
        }
    }

    showAddModal = () => {
        this.refs.myModal.open()
    }

    addDataFromServer = async () => {
        if (!this.state.nameItem || !this.state.descriptionItem) {
            alert("Nhập chữ vào")
            return
        }
        let newItem = {
            email: this.state.nameItem,
            ip_address: this.state.descriptionItem,
            image: 'https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        }
        let result = await insertDataFromServer(newItem)
        if (result) {
            this.props.parentFlatList.refreshDataFromServer()
            this.props.parentFlatList._onScrollFlatListEnd()
        }
        this.refs.myModal.close()
    }

    render() {
        return (
            <Modal
                ref={"myModal"}
                style={{
                    justifyContent: 'center',
                    borderRadius: Platform.OS === 'ios' ? 30 : 0,
                    shadowRadius: 10,
                    width: screen.width - 80,
                    height: 300
                }}>
                <Text style={{ textAlign: 'center', fontSize: 16, fontWeight: 'bold', marginTop: 40 }}>New food's informations</Text>
                <TextInput
                    onChangeText={text => {
                        this.setState({
                            nameItem: text
                        })
                    }}
                    style={{
                        height: 40,
                        borderBottomColor: 'gray',
                        marginLeft: 30,
                        marginRight: 30,
                        marginTop: 20,
                        marginBottom: 10,
                        borderBottomWidth: 1
                    }}
                    placeholder="Name"
                    value={this.state.nameItem} />
                <TextInput
                    onChangeText={text => {
                        this.setState({
                            descriptionItem: text
                        })
                    }}
                    style={{
                        height: 40,
                        borderBottomColor: 'gray',
                        marginLeft: 30,
                        marginRight: 30,
                        marginTop: 20,
                        marginBottom: 10,
                        borderBottomWidth: 1
                    }}
                    placeholder="Description"
                    value={this.state.descriptionItem}
                />
                <Button
                    style={{ fontSize: 19, color: 'white' }}
                    containerStyle={{ padding: 0, marginRight: 70, marginLeft: 70, height: 40, borderRadius: 6, backgroundColor: 'mediumseagreen' }}
                    onPress={this.addDataFromServer}
                >
                    Submit
                </Button>
            </Modal>
        )
    }
}
