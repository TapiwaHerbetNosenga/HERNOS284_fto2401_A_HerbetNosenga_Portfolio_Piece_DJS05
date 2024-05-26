import { increment, decrement, reset } from "./action.js";
import {Store, tallyReducer, initialState} from './tally.js'

const store = new Store(tallyReducer, initialState);

store.subscribe(state =>{
    console.log('Tally changed:', state)
});

store.dispatch(increment());
store.dispatch(increment());

store.dispatch(reset());

store.dispatch(decrement());


