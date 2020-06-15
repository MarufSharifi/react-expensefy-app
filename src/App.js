
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
