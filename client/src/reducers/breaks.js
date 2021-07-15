const reducer = (breaks = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return breaks;
        case 'CREATE':
            return breaks;
        default:
            return breaks;
    }
}