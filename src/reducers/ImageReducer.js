import { IMG_CHOOSE } from '../constants/actionTypes';

const INITIAL_STATE = {};

export default function ImgReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case IMG_CHOOSE:
            return {
                ...state,
                image: action.image
            };

        default:
            return state;
    }
}
