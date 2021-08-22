import { ADDTIME, MINUSTIME } from "../constants/actionTypes";

const timeLeft = (state = 10, action) => {
    switch(action.type){
        case ADDTIME:
            return state + 60
        case MINUSTIME:
            return state - 60
        default: 
            return state
    }
}

export default timeLeft;