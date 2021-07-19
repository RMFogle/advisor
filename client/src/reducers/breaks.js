/* eslint-disable import/no-anonymous-default-export */
export default (breaks = [], action) => {
    switch (action.type) {
        case 'DELETE':
            return breaks.filter((post) => post._id !== action.payload);
        case 'UPDATE':
            return breaks.map((post) => post._id === action.payload._id ? action.payload : post)
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return [ ...breaks, action.payload];
        default:
            return breaks;
    }
};