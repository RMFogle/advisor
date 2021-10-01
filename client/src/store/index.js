import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import { reducers } from '../reducers';

function saveToLocalStorage(state) {
        try {
        const serialisedState = JSON.stringify(state);
        localStorage.setItem("persistantState", serialisedState);
        } catch (error) {
        console.warn(error);
        }
    }

function loadFromLocalStorage() {
        try {
        const serialisedState = localStorage.getItem("persistantState");
        if (serialisedState === null) return undefined;
        return JSON.parse(serialisedState);
        } catch (error) {
        console.warn(error);
        return undefined;
        }
    }
    
    const store = createStore(reducers, loadFromLocalStorage(), compose(applyMiddleware(thunk)));
    
    store.subscribe(() => saveToLocalStorage(store.getState()));

    export default store;