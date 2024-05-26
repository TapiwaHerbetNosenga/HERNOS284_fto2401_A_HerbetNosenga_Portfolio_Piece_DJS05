//increment action creator

 const ADD = 'ADD';
 const SUBTRACT = 'SUBTRACT';
 const RESET = 'RESET';

export const increment = ()=>{
    return {type: ADD };
}

export const decrement = ()=> {
    return {type: SUBTRACT};
} 

export const reset = ()=> {
    return {type: RESET};
} 

