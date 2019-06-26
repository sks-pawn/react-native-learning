/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { View } from 'react-native';
import { LoginButton, AccessToken, LoginManager } from 'react-native-fbsdk';
import firebase from 'react-native-firebase';


export default class Facebook extends Component {
    render() {
        return (
            <View>
                <LoginButton
                    onLoginFinished={
                        (error, result) => {
                            if (error) {
                                console.log("login has error: " + result.error);
                            } else if (result.isCancelled) {
                                console.log("login is cancelled.");
                            } else {
                                // AccessToken.getCurrentAccessToken().then(
                                //     (data) => {
                                //         console.log('data :', JSON.stringify(data))
                                //         console.log('accessToken :', data.accessToken.toString())
                                //     }
                                // )
                                LoginManager.logInWithPermissions(["public_profile", "email"])
                                    .then(result => {
                                        if (result.isCancelled) {
                                            console.log("Login cancelled");
                                        } else {
                                            console.log("Login success with permissions: " + result.grantedPermissions.toString());
                                            return AccessToken.getCurrentAccessToken()
                                        }
                                    })
                                    .then(data => {
                                        let credential = firebase.auth.FacebookAuthProvider.credential(data.accessToken)
                                        return firebase.auth().signInWithCredential(credential)

                                    })
                                    .then(currentUser => {
                                        console.log('Facebook Login User :', JSON.stringify(currentUser));
                                    })
                                    .catch(error => {
                                        console.log("Login fail with error: " + error);
                                    });
                            }
                        }
                    }
                    onLogoutFinished={() => console.log("logout.")} />
            </View>
        );
    }
}

