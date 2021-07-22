import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { addTimer } from '../actions';

export default function NewTimer() {
    const [ name, setName ] = useState('')
    const dispatch = useDispatch()

    return (
        <div>
            <input 
                type='text'
                placeholder="New Timer Name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}/>
            <button 
                onClick={() => dispatch(addTimer(name))}
            >Save</button>
        </div>
    )
}