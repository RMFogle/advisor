import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import { reducers } from '../reducers';

//convert object to string and store in localStorage
function saveToLocalStorage(state) {
        try {
        const serialisedState = JSON.stringify(state);
        localStorage.setItem("persistantState", serialisedState);
        } catch (error) {
        console.warn(error);
        }
    }
    
    //load string from localStorage and convert into an Object
    //invalid output must be undefined
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
    
    //create store from reducers and use loadFromLocalStorage to overwrite any values saved
    const store = createStore(reducers, loadFromLocalStorage(), compose(applyMiddleware(thunk)));
    
    //listen for store changes and use saveToLocalStorage to save to localStorage
    store.subscribe(() => saveToLocalStorage(store.getState()));

    export default store;