import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View,
    SectionList,
    Image,
    Alert,
    Platform,
    TouchableHighlight
} from 'react-native';

import sectionListData from '../data/sectionListData'

class SectionListItem extends Component {
    render() {
        let { index, item } = this.props
        return (
            <View style={styles.sectionListItem}>
                <View>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: 'bold', color: 'white', marginLeft: 20
                    }}>
                        {item.name}
                    </Text>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: 'bold', color: 'white', marginLeft: 20
                    }}>
                        {item.description}
                    </Text>
                </View>
                <View style={{ height: 1, backgroundColor: 'blue' }}></View>
            </View>
        )
    }
}

export default class BasicSectionList extends Component {
    render() {
        return (
            < View style={[styles.container, { height: Platform.OS == 'ios' ? 34 : 0 }]}>
                <SectionList
                    sections={sectionListData}
                    keyExtractor={(item, index) => item + index}
                    renderItem={({ item, index }) => {
                        return (
                            <SectionListItem

                                item={item}
                                index={index}
                                parentFlatList={this}></SectionListItem>
                        )
                    }}
                    renderSectionHeader={({ section: { title } }) => (
                        <View >
                            <Text style={{ fontWeight: 'bold', fontSize: 16, color: 'black', margin: 20 }}>{title}</Text>
                        </View>
                    )}

                >
                </SectionList>
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
    sectionListItem: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'rgb(98, 197, 184)'
    }
});

