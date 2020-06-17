
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import logo from './logo.svg';
import AppRouter, {history} from './routers/AppRouter';
import configureStore from './store/configureStore';
import getVisibleExpenses from './selectors/expenses';
import { startSetExpenses } from './actions/expenses';
import {Login, Logout} from './actions/auth';
import './Styles/Styles.scss';
import { firebase } from './firebase/firebase';


const store = configureStore();

const jsx = (
  <Provider store={store}> 
    <AppRouter />
  </Provider>
);

let hasRendered = false;

const renderApp = () => {
  if(!hasRendered){
    ReactDOM.render(jsx, document.getElementById('root'));
    hasRendered = true;
  }
}


firebase.auth().onAuthStateChanged((user) => {

  if(user) {
    store.dispatch(Login(user.uid));
    store.dispatch(startSetExpenses());
    renderApp();
    if(history.location.pathname === '/'){
      history.push('/dashboard');
    }

  }else {
    store.dispatch(Logout());
    renderApp();
    history.push('/');
  }
});






// function App() {

//   return (
//    jsx
//   );
// }


// export default App;

