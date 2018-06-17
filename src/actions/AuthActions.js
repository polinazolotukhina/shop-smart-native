import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import * as types from '../constants/actionTypes';

//========Login========================
export const emailLogin = (email, password) => {
    return dispatch => {
        dispatch({ type: types.LOGIN_REQUEST });
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(user => loginUserSuccess(user, dispatch))
            .catch(error => {
                dispatch({ type: types.LOGIN_FAIL, payload: error.message });
            });
    };
};

export const singUpWithEmail = (email, password) => {
    return dispatch => {
        dispatch({ type: types.LOGIN_REQUEST });
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then(user => loginUserSuccess(user, dispatch))
            .catch(error => {
                dispatch({ type: types.LOGIN_FAIL, payload: error.message });
            });
    };
};
const loginUserSuccess = (user, dispatch) => {
    dispatch({ type: types.LOGIN_SUCCESS, payload: user });
    Actions.main();
};
