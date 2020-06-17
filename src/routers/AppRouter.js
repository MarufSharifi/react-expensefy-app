import React from 'react';
import { Switch , Router, Route} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory'
import ExpenseDashboardPage from './../Components/ExpenseDashboardPage';
import AddExpensePage from './../Components/AddExpensePage';
import EditExpensePage from './../Components/EditExpensePage';
import LoginPage from './../Components/LoginPage';
import NotFoundPage from './../Components/NotFoundPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute'



export const history = createHistory();

const AppRouter = () => (
 <Router history= {history} >
      <div>
        <Switch >
        <PublicRoute path="/" component={LoginPage} exact={true} />
        <PrivateRoute path="/create" component={AddExpensePage}/>
        <PrivateRoute path="/dashboard" component={ExpenseDashboardPage} />
        <PrivateRoute path="/edit/:id" component={EditExpensePage}/>
        <Route component={NotFoundPage}/>
        </Switch>
      </div> 
 </Router>
);


export default AppRouter;