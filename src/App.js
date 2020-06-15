
import React from 'react';
import {Provider} from 'react-redux'
import logo from './logo.svg';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import getVisibleExpenses from './selectors/expenses';
import './Styles/Styles.scss';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';




const store = configureStore();


store.dispatch(addExpense({description: 'water bill' , amount: 4500}));
store.dispatch(addExpense({description: 'Gas bill', createdAt: 1000}));
store.dispatch(addExpense({description: 'rent',amount: 109500}));

const state = store.getState();

const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

console.log(visibleExpenses);


const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
  
);
function App() {

  return (
   jsx
  );
}

export default App;
