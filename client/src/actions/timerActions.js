import { ADDTIME, MINUSTIME } from "../constants/actionTypes"

const addTime = () => {
    return {
        type: ADDTIME,
    }
}

const minusTime = () => {
    return {
        type: MINUSTIME, 
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { addTime, minusTime }; 