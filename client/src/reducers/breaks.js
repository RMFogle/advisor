/* eslint-disable import/no-anonymous-default-export */
export default (breaks = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return [ ...breaks, action.payload];
        default:
            return breaks;
    }
};