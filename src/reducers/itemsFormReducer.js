import { ITEM_TYPE, EDIT_ITEM, SUMBIT_ITEM } from '../constants/actionTypes';

const INITIAL_STATE = {
    purchase: '',
    brand: '',
    price: '',
    timesOut: ''
};

export default (state = INITIAL_STATE, action) => {
    console.log(action);
    switch (action.type) {
        case ITEM_TYPE:
            return { ...state, [action.payload.prop]: action.payload.value };
        case EDIT_ITEM:
            return INITIAL_STATE;
        case SUMBIT_ITEM:
            return INITIAL_STATE;
        default:
            return state;
    }
};
