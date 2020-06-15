import {createStore, combineReducers } from 'redux';
import expenseReducer from '../reducers/expenses';
import filtersReducers from '../reducers/filters';

export default () => {

    const store = createStore(combineReducers({
        expenses: expenseReducer,
        filters: filtersReducers
    }));

    return store;
};
