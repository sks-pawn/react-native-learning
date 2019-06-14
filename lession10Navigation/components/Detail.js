import React, { Component } from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'

export default class Detail extends Component {
    // static navigationOptions = {
    //     title: 'Detail'
    // }

    // static navigationOptions = ({ navigation }) => {
    //     const { state, setParams } = navigation
    //     const isInfo = state.params.mode === 'info'
    //     const { username } = state.params
    //     return ({
    //         title: `Detail + ${username}`,
    //         headerRight: (
    //             <Button
    //                 title={isInfo ? 'DONE' : `${username}'s info`}
    //                 onPress={() => setParams({ mode: 'none' })} />
    //         )
    //     })
    // }

    render() {
        // const { params } = this.props.navigation.state;
        // const { goBack } = this.props.navigation
        return (
            <View style={styles.container}>
                {/* <Text>
                    Detail {params.username}
                </Text>
                <Button
                    title="Back"
                    onPress={() => {
                        goBack()
                    }}>

                </Button> */}
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
