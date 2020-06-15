import {createStore} from 'redux'


const incrementCount = ({ incrementBy = 1} = {})=> ({
    type: 'INCREMENT',
    incrementBy
});


const decrementCount = ({ decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const setCount = ({ count } = {}) => ({
        type: 'SET',
        count
});


const reSetCount = () => ({
    type: 'RESET'  
});

// Reducers
// pure function
// does not change state and action

const countReducer = (state = { count: 0 }, action) => {
  
    switch(action.type){
        case 'INCREMENT' :
            return {
                count: state.count + action.incrementBy
            }
        case 'DECREMENT' :
            return {
                count: state.count - action.decrementBy
            }
        case 'RESET' :
            return {
                count: 0
            }
        case 'SET' :
            return {
                count: action.count
            }
        default: 
            return state;
    }

}

const store = createStore();


const unSubscribe = store.subscribe(() => {

console.log(store.getState());
});


store.dispatch(incrementCount({ incrementBy: 5})); 


store.dispatch(incrementCount()); 

store.dispatch({
    type: 'RESET'
});

store.dispatch(decrementCount({ decrementBy: 10}))

store.dispatch(decrementCount()); 


store.dispatch(setCount({ count: 101}));
