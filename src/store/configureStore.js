import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import expenseReducer from '../reducers/expenses';
import filtersReducers from '../reducers/filters';
import thunk from 'redux-thunk';


        const composeEnhancers = window.__REDUX__DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default () => {
    const store = createStore(combineReducers({
        expenses: expenseReducer,
        filters: filtersReducers
    })
    , composeEnhancers(applyMiddleware(thunk)) 
    );

    return store;
};
