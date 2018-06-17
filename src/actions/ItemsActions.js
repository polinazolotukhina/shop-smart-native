import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import * as types from '../constants/actionTypes';

//================================

export const onTypeItems = ({ prop, value }) => {
    return {
        type: types.ITEM_TYPE,
        payload: { prop, value }
    };
};

export const editItem = ({ purchase, brand, price, timesOut }, uid) => {
    const { currentUser } = firebase.auth();
    return dispatch => {
        firebase
            .database()
            .ref(`/users/${currentUser.uid}/items/${uid}`)
            .set({ purchase, brand, price, timesOut })
            .then(() => {
                dispatch({ type: types.EDIT_ITEM });
                Actions.pop();
            });
    };
};

export const submitItem = ({ purchase, brand, price, timesOut }) => {
    const { currentUser } = firebase.auth();
    return dispatch => {
        firebase
            .database()
            .ref(`/users/${currentUser.uid}/items`)
            .push({ purchase, brand, price, timesOut })
            .then(() => {
                dispatch({ type: types.SUMBIT_ITEM });
                Actions.pop();
            });
    };
};

export const deleteItem = id => {
    const { currentUser } = firebase.auth();
    return dispatch => {
        firebase
            .database()
            .ref(`/users/${currentUser.uid}/items/${id}`)
            .remove()
            .then(() => {
                dispatch({ type: types.DELETE_ITEM });
            });
    };
};

export const itemsFetch = () => {
    const { currentUser } = firebase.auth();
    return dispatch => {
        firebase
            .database()
            .ref(`/users/${currentUser.uid}/items`)
            .on('value', snapshot => {
                dispatch({
                    type: types.ITEM_FETCH_SECCESS,
                    payload: snapshot.val()
                });
            });
    };
};
