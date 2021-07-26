import React from 'react';
import { useSelector } from 'react-redux';
// import { selectTimer } from '../../actions/timers';

import TimerView from './TimerView';

const ListTimers = () => {
    const timers = useSelector(state => state.timers) 

    console.log(timers); 

    return (
        <div>
            {timers?.map((timer, i) => (
                <TimerView key={`timer-${i}`} timer={timer} index={i} />
            ))}
        </div>
    );
}

export default ListTimers;