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
import horizontalFlastListData from '../data/horizontalFlatListData'
import Icon from 'react-native-vector-icons/Ionicons';

class HorizontalFlatListItem extends Component {
    render() {
        let { index, item } = this.props
        return (
            <View style={styles.containerItem}>
                <Text style={{
                    fontSize: 16,
                    fontWeight: 'bold',
                    color: 'white',
                    margin: 20
                }}>
                    {item.hour}
                </Text>
                <Icon name={(Platform.OS == 'ios' ? item.status.ios : item.status.android)} size={30} color="white" />
                <Text style={{
                    fontSize: 16,
                    fontWeight: 'bold',
                    color: 'white',
                    margin: 20
                }}>
                    {item.degrees} ℃
                </Text>
            </View>
        )
    }
}

export default class HorizontalFlatList extends Component {
    render() {
        return (
            <View style={[styles.container, { height: Platform.OS == 'ios' ? 34 : 0 }]}>
                <View style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0
                }}>
                    <Image
                        style={{
                            flex: 1,
                            justifyContent: 'center',
                            flexDirection: 'column',
                            width: null,
                            height: null
                        }}
                        source={require('../images/back.jpeg')}></Image>
                </View>
                <View style={{ height: 150 }}>
                    <FlatList
                        style={{ backgroundColor: 'black', opacity: 0.5 }}
                        horizontal={true}
                        data={horizontalFlastListData}
                        renderItem={({ item, index }) => {
                            return <HorizontalFlatListItem key={item.key} item={item} index={index} parentFlatList={this}></HorizontalFlatListItem>
                        }}>
                    </FlatList>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    containerItem: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        width: 90,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'grey',
        margin: 4
    }
});

