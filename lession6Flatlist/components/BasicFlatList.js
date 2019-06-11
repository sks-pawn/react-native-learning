import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    Image,
    Alert,
    Platform,
    TouchableHighlight
} from 'react-native';
import Swipeout from 'react-native-swipeout'
import AddModal from './AddModel'
import EditModal from './EditModal'
import flatListData from '../data/flatListData.js'

class FlatListItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            activeRowId: null,
            resetItem: 0
        }
    }

    refreshFlatListItem = () => {
        this.setState({
            resetItem: this.state.resetItem + 1
        })
    }

    render() {
        let { index, item, parentFlatList } = this.props
        const swipeSettings = {
            autoClose: true,
            onClose: (secId, rowId, direction) => {
                console.log('onClose')
                if (this.state.activeRowId != null) {
                    this.setState({ activeRowId: null })
                }
            },
            onOpen: (secId, rowId, direction) => {
                console.log('onOpen')
                if (direction) {
                    this.setState({ activeRowId: item.id })
                }
            },
            right: [
                {
                    onPress: () => {
                        parentFlatList._onPressEdit(flatListData[index], this)
                    },
                    text: 'Update', type: 'primary'
                },
                {
                    onPress: () => {
                        Alert.alert(
                            'Alert',
                            'Are you sure you want to delete?',
                            [
                                { text: 'No', onPress: () => console.log('Cancel Pressed') },
                                {
                                    text: 'Yes', onPress: () => {
                                        flatListData.splice(index, 1)
                                        parentFlatList.refreshFlatList(item.id)
                                    }
                                },
                            ],
                            { cancelable: true })

                    },
                    text: 'Delete', type: 'delete'
                }
            ],
            rowId: index,
            sectionId: 1

        }
        return (
            <Swipeout {...swipeSettings}>
                <View>
                    <View style={{ flex: 1, flexDirection: 'row', backgroundColor: index % 2 == 0 ? 'red' : 'green' }}>
                        <Image source={{ uri: item.image }}
                            style={{ width: 100, height: 100, margin: 5 }}></Image>
                        <View style={{ flex: 1, flexDirection: 'column' }}>
                            <Text style={styles.flatListItem}>{item.email}</Text>
                            <Text style={styles.flatListItem}>{item.ip_address}</Text>
                        </View>
                    </View>
                    <View style={{ height: 3, backgroundColor: 'white' }}></View>
                </View>
            </Swipeout>
        )
    }
}


export default class BasicFlatList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            deleteRowId: null
        }
    }

    refreshFlatList = deleteId => {
        this.setState((prevState) => {
            return {
                deleteRowId: deleteId
            }
        })
    }

    _onPressAdd = () => {
        this.refs.addModal.showAddModal()
    }

    _onPressEdit = (editItem, flatListItem) => {
        this.refs.editModal.showEditModal(editItem, flatListItem)
    }

    _onScrollFlatListEnd = () => {
        this.refs.flatList.scrollToEnd()
    }
    render() {

        return (
            < View style={[styles.container, { height: Platform.OS == 'ios' ? 34 : 0 }]}>
                <View style={{ backgroundColor: 'tomato', height: 60 }}>
                    <TouchableHighlight
                        style={{ marginRight: 10 }}
                        underlayColor='tomato'
                        onPress={this._onPressAdd}
                    >
                        <Image style={{ width: 35, height: 35 }} source={require('../icons/icons-add.png')}></Image>
                    </TouchableHighlight>

                </View>
                <FlatList
                    ref="flatList"
                    data={flatListData}
                    renderItem={({ item, index }) => {
                        return (
                            <FlatListItem item={item} index={index} parentFlatList={this}></FlatListItem>
                        )
                    }} >
                </FlatList>
                <AddModal ref={'addModal'} parentFlatList={this} ></AddModal>
                <EditModal ref={'editModal'} parentFlatList={this} ></EditModal>
            </View >
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#F5FCFF',
    },
    flatListItem: {
        color: 'white',
        padding: 5,
        fontSize: 16
    }
});

