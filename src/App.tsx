import React from 'react';
import { Provider } from 'react-redux';

import './styles.css';

import store from './store/store';
import MainView from './containers/MainView';

const App = () => {
    return (
        <Provider store={store}>
            <MainView />
        </Provider>
    );
};
export default App;