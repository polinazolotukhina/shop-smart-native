import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGIN_REQUEST
} from '../constants/actionTypes';

const INITIAL_STATE = {
    email: '',
    password: '',
    user: null,
    error: '',
    loading: 'false'
};

export default function AuthReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                ...INITIAL_STATE,
                user: action.payload
            };
        case LOGIN_FAIL:
            return {
                ...state,
                ...INITIAL_STATE,
                error: action.payload
            };
        case LOGIN_REQUEST:
            return {
                ...state,
                ...INITIAL_STATE,
                loading: true
            };
        default:
            return state;
    }
}
