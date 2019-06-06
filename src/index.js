import React from 'react';
import ReactDOM from 'react-dom';
//Provider : such that our Home component at each level has access to store.
import { Provider } from 'react-redux';
//To create the store
import { createStore } from 'redux';

import Home from './Home';
import rootReducer from './reducers';
import { addCharacterById } from './actions'

const store = createStore(rootReducer);
store.subscribe(() => console.log(store.getState()));
store.dispatch(addCharacterById(3));
ReactDOM.render(<Provider store={store}> <Home/> </Provider>, document.getElementById('root'));