import { increment, decrement, reset } from "./action.js";
import {Store, tallyReducer, initialState} from './tally.js'

const store = new Store(tallyReducer, initialState);

store.subscribe(state =>{
    console.log('Tally changed:', state)
});

store.getState()
store.dispatch(increment());
store.dispatch(increment());

store.dispatch(decrement());

store.dispatch(reset());




