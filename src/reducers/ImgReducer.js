import { IMG_SAVE, IMG_CONFIRM } from '../constants/actionTypes';

const INITIAL_STATE = {
    img: {}
};

export default function ImgReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case IMG_SAVE:
            return {
                ...state,
                img: action.img
            };
        case IMG_CONFIRM:
            return {
                ...state,
                imgThumb: action.img
            };

        default:
            return state;
    }
}
