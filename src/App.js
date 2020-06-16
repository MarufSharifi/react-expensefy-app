
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import logo from './logo.svg';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import getVisibleExpenses from './selectors/expenses';
import './Styles/Styles.scss';
import { startSetExpenses, startAddExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import './firebase/firebase';


const store = configureStore();


const jsx = (
  <Provider store={store}> 
    <AppRouter />
  </Provider>
);

ReactDOM.render(<p>Lodding....</p>, document.getElementById('root'));

store.dispatch(startSetExpenses());


ReactDOM.render(jsx, document.getElementById('root'));

// function App() {

//   return (
//    jsx
//   );
// }

// export default App;
