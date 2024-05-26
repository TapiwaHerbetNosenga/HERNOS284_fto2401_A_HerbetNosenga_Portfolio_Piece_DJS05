

//store class


export  class Store {

    
    constructor(reducer, initialState){
        this.reducer = reducer;
        this.state = initialState;
        this.subscribers = [];
    }

    //will console the current state of the tally
    getState(){
        return console.log(this.state);
    }

    //this method will send the action to the reducer function and notify all the subscribers
    dispatch(action){
        this.state = this.reducer(this.state, action);
        this.notifySubscribers();
    }

    //this method will add a subscriber to the subscribers array so they get notifications on state changes
    subscribe(subscriber){
        this.subscribers.push(subscriber);
 
        return () => {
            this.subscribers = this.subscribers.filter(sub => sub !== subscriber);
    }
    }

    //this method will notify all the subscribers of the state changes
    notifySubscribers() {
        this.subscribers.forEach(sub => //each item in teh subscribers array will return the current state
            sub(this.state));
    }

}
    

//this reducer function is a pure function, meaning given the same inputs it will output the same output every time, it uses a switch statement as its conditional and is what we use to check the action before dispatching it to the store
export const tallyReducer = (state, action) =>{
        switch(action.type){
            case 'ADD':
                return {tally: state.tally  + 1};
            case 'SUBTRACT':
                return  {tally: state.tally - 1};
            case 'RESET': 
                return {tally: 0};
            default:
                return state;
        }
    }

export const initialState = {tally: 0};