import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import logger from 'redux-logger';
import reducers from './src/reducers';
import RouterComponent from './src/Router';
import FirebaseConfig from './keys';

export default class App extends Component<{}> {
    componentWillMount() {
        const config = FirebaseConfig;
        firebase.initializeApp(config);
    }
    render() {
        const store = createStore(
            reducers,
            {},
            applyMiddleware(ReduxThunk, logger)
        );
        return (
            <Provider store={store}>
                <RouterComponent />
            </Provider>
        );
    }
}
