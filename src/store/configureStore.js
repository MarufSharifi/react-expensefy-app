import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import expenseReducer from '../reducers/expenses';
import filtersReducers from '../reducers/filters';
import authReducer from '../reducers/auth';


        const composeEnhancers = window.__REDUX__DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default () => {
    const store = createStore(combineReducers({
        expenses: expenseReducer,
        filters: filtersReducers,
        auth: authReducer
    })
    , composeEnhancers(applyMiddleware(thunk)) 
    );

    return store;
};
