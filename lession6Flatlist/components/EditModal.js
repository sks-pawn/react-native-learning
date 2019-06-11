import React, { Component } from 'react';
import {
    Text,
    TextInput,
    Platform,
    Dimensions
} from 'react-native';
import Modal from 'react-native-modalbox'
import Button from 'react-native-button'
import flatListData from '../data/flatListData.js'

const screen = Dimensions.get('window')

export default class EditModal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: '',
            nameItem: '',
            descriptionItem: '',
            flatListItem: ''
        }
    }

    showEditModal = (editItem, flatListItem) => {
        this.setState({
            id: editItem.id,
            nameItem: editItem.email,
            descriptionItem: editItem.ip_address,
            flatListItem: flatListItem
        })
        this.refs.myModal.open()
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
                <Text style={{ textAlign: 'center', fontSize: 16, fontWeight: 'bold', marginTop: 40 }}>Edit food's informations</Text>
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
                    onPress={() => {
                        if (!this.state.nameItem || !this.state.descriptionItem) {
                            alert("Nhập chữ vào")
                            return
                        }
                        let id = this.state.id
                        let foundIndex = flatListData.findIndex(item => id == item.id)
                        if (foundIndex < 0) return
                        flatListData[foundIndex].email = this.state.nameItem
                        flatListData[foundIndex].ip_address = this.state.descriptionItem
                        this.state.flatListItem.refreshFlatListItem()
                        this.refs.myModal.close()
                        
                    }}
                >
                    Submit
                </Button>
            </Modal>
        )
    }
}
