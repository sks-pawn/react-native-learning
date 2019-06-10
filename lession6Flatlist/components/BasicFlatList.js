import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    Image,
    AppRegistry
} from 'react-native';
import flatListData from '../data/flatListData.js'

class FlatListItem extends Component {
    render() {
        let { index, item } = this.props
        return (
            <View>
                <View style={{ flex: 1, flexDirection: 'row', backgroundColor: index % 2 == 0 ? 'red' : 'green' }}>
                    <Image source={{ uri: item.image }}
                        style={{ width: 100, height: 100, margin: 5 }}></Image>
                    <View style={{ flex: 1, flexDirection: 'column' }}>
                        <Text style={styles.flatListItem}>{item.email}</Text>
                        <Text style={styles.flatListItem}>{item.first_name}</Text>
                        <Text style={styles.flatListItem}>{item.ip_address}</Text>
                    </View>
                </View>
                <View style={{ height: 3, backgroundColor: 'white' }}></View>
            </View>
        )
    }
}


export default class BasicFlatList extends Component {
    render() {
        return (
            < View style={styles.container}>
                <FlatList
                    data={flatListData}
                    renderItem={({ item, index }) => {

                        return (
                            <FlatListItem item={item} index={index}></FlatListItem>
                        )
                    }} >
                </FlatList>
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

