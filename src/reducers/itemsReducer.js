import { ITEM_FETCH_SECCESS } from '../constants/actionTypes';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
    console.log(action);
    switch (action.type) {
        case ITEM_FETCH_SECCESS:
            return action.payload;
        default:
            return state;
    }
};
