import firebase from 'firebase';
import { Platform } from 'react-native';
import { Actions } from 'react-native-router-flux';
import RNFetchBlob from 'react-native-fetch-blob';
import * as types from '../constants/actionTypes';

const RNFS = require('react-native-fs');

const Blob = RNFetchBlob.polyfill.Blob;
window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest;
window.Blob = Blob;

// export const chooseImg = image => {
//     return dispatch => {
//         console.log('image form actions', image);
//         const imageRef = firebase
//             .storage()
//             .ref('images')
//             .child(`images/${image}`);
//         imageRef.put(image).then(snapshot => {
//             console.log('Uploaded a blob or file!', snapshot);
//         });
//         dispatch({ type: types.IMG_CHOOSE });
//     };
// };

export const chooseImg = (uri, mime = 'application/octet-stream') => {
    return new Promise((resolve, reject) => {
        const uploadUri =
            Platform.OS === 'ios' ? uri.replace('file://', '') : uri;
        const sessionId = new Date().getTime();
        let uploadBlob = null;
        const imageRef = firebase.storage.ref('images').child(`${sessionId}`);

        RNFS.readFile(uploadUri, 'base64')
            .then(data => {
                return Blob.build(data, { type: `${mime};BASE64` });
            })
            .then(blob => {
                uploadBlob = blob;
                return imageRef.put(blob, { contentType: mime });
            })
            .then(() => {
                uploadBlob.close();
                return imageRef.getDownloadURL();
            })
            .then(url => {
                resolve(url);
            })
            .catch(error => {
                reject(error);
            });
    });
};

//================================
