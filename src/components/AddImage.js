import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    PixelRatio,
    TouchableOpacity,
    Image
} from 'react-native';
import { connect } from 'react-redux';
import RNFetchBlob from 'react-native-fetch-blob';
import firebase from 'firebase';

import { bindActionCreators } from 'redux';
import { Actions } from 'react-native-router-flux';
import * as actions from './../actions';
import ImagePicker from 'react-native-image-picker';
import { Card, CardSection, Input, Button } from './common';

class AddImage extends React.Component {
    state = {
        avatarSource: null
    };

    selectPhotoTapped() {
        const options = {
            quality: 1.0,
            maxWidth: 500,
            maxHeight: 500,
            storageOptions: {
                skipBackup: true
            }
        };

        ImagePicker.showImagePicker(options, response => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled photo picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log(
                    'User tapped custom button: ',
                    response.customButton
                );
            } else {
                // let source = { uri: response.uri };

                // You can also display the image using data:
                let source = { uri: 'data:image/jpeg;base64,' + response.data };

                this.setState({
                    avatarSource: source
                });
            }
        });
    }
    onImageConfirmed(img) {
        console.log('img', img);
        // console.log('this is image. is it file?', this.state.avatarSource);
        // const image = img.uri;
        // console.log('img', img);
        // console.log('I AM IMAGE', image);
        // const Blob = RNFetchBlob.polyfill.Blob;
        // const fs = RNFetchBlob.fs;
        // window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest;
        // window.Blob = Blob;
        //
        // let uploadBlob = null;
        // const imageRef = firebase
        //     .storage()
        //     .ref('posts')
        //     .child('test.jpg');
        // let mime = 'image/jpg';
        // fs
        //     .readFile(image, 'base64')
        //     .then(data => {
        //         return Blob.build(data, { type: `${mime};BASE64` });
        //     })
        //     .then(blob => {
        //         uploadBlob = blob;
        //         console.log('blog', blob);
        //         return imageRef.put(blob, { contentType: mime });
        //     })
        //     .then(() => {
        //         uploadBlob.close();
        //         return imageRef.getDownloadURL();
        //     })
        //     .then(url => {
        //         // URL of the image uploaded on Firebase storage
        //         console.log(url);
        //     })
        //     .catch(error => {
        //         console.log('Oops!', error);
        //     });
        this.props.actions.chooseImg(img.uri);
        Actions.pop();
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={this.selectPhotoTapped.bind(this)}>
                    <CardSection>
                        <View
                            style={[
                                styles.avatar,
                                styles.avatarContainer,
                                { marginBottom: 20 }
                            ]}
                        >
                            {this.state.avatarSource === null ? (
                                <Text>Select a Photo</Text>
                            ) : (
                                <Image
                                    style={styles.avatar}
                                    source={this.state.avatarSource}
                                />
                            )}
                        </View>
                    </CardSection>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {
                        this.onImageConfirmed(this.state.avatarSource);
                    }}
                >
                    <View style={[styles.avatar, styles.avatarContainer]}>
                        <Text>done!</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    avatarContainer: {
        borderColor: '#9B9B9B',
        borderWidth: 1 / PixelRatio.get(),
        justifyContent: 'center',
        alignItems: 'center'
    },
    avatar: {
        width: 150,
        height: 150
    }
});
function mapStateToProps(state) {
    const { itemsForm } = state;
    return {
        itemsForm
    };
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddImage);
