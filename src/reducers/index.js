import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import ImgReducer from './ImgReducer';
import ImageReducer from './ImageReducer';
import itemsReducer from './itemsReducer';
import itemsFormReducer from './itemsFormReducer';

export default combineReducers({
    auth: AuthReducer,
    items: itemsReducer,
    itemsForm: itemsFormReducer,
    img: ImgReducer,
    image: ImageReducer
});
