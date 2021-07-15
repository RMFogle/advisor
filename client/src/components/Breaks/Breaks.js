import React from 'react';
import Break from './Break/Break';

//displays all the breaks to the main page. Perhaps this is redundent and all the breaks, habits and tasks need to just
//...be posted to the routines page. i.e. post-->posts. break/habit/task-->routines.
//..then user can move cards around as they see fit?

const Breaks = () => {
    return (
        <>
            <h1>BREAKS</h1>
            <Break />
            <Break />
            <Break />
        </>
    ); 
}

export default Breaks; 