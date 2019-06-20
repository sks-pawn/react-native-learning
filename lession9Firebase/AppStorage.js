import React, { Component } from 'react'
import { Text, View, StyleSheet, Button, Image, Platform, ActivityIndicator } from 'react-native'
import FirebaseConfig from './components/FirebaseConfig'
import ImagePicker from 'react-native-image-picker';
import RNFetchBlob from 'react-native-fetch-blob'


// chưa hiểu config
const storage = FirebaseConfig.storage()
const { fs, polyfill } = RNFetchBlob
const { Blob, XMLHttpRequest } = polyfill

window.XMLHttpRequest = XMLHttpRequest
window.Blob = Blob

const options = {
    title: 'Select Avatar',
    customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
    storageOptions: {
        skipBackup: true,
        path: 'images',
    },
};

const uploadImage = (uri, mime = 'img/jpg') => {
    return new Promise((resolve, reject) => {
        const uploadUri = Platform.OS === 'ios' ? uri.replace('file://', '') : uri
        const sessionId = new Data().getTime()
        let uploadBlob = null
        const imageRef = storage.ref('images').child(`${sessionId}.jpg`)

        fs.readFile(uploadUri, 'base64')
            .then(data => {
                return Blob.build(data, { type: `${mime}; BASE64` })
            })
            .then(blob => {
                uploadBlob = blob
                return imageRef.put(blob, { contentType: mime })
            })
            .then(() => {
                uploadBlob.close()
                return imageRef.getDownloadURL()
            })
            .then(url => {
                resolve(url)
            })
            .catch((err) => {
                reject(err)
            });
    })
}

export default class AppStorage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            photo: null
        }
    }



    handleChoosePhoto = () => {
        ImagePicker.showImagePicker(options, response => {
            this.setState({
                photo: ''
            });

            if (response.didCancel) {
            } else if (response.error) {
            } else if (response.customButton) {
            } else {
                uploadImage(response.uri).then(url => {
                    this.setState({ photo: url });
                }).catch((err) => {
                    throw err
                });
            }
        })
    }
    render() {
        const { photo } = this.state
        return (
            <View style={styles.container}>
                <Text style={{ fontSize: 30, color: 'green' }}>UPLOAD IMAGE</Text>
                <Text style={{color: 'black'}}>{photo}</Text>
                {
                    (() => {
                        switch (photo) {
                            case null:
                                return null
                            case '':
                                return <ActivityIndicator size="large" color="#0000ff" />
                            default:
                                return (<View>
                                    <Text>{photo}</Text>
                                    <Image
                                        source={{ uri: photo }}
                                        style={{ width: 300, height: 300 }}
                                    />
                                </View>)
                        }
                    })
                }
                <Button title="Choose Photo" onPress={this.handleChoosePhoto} />
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

