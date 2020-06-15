import React from 'react';
import { BrowserRouter ,Route,Switch, Link, NavLink} from 'react-router-dom';
import ExpenseDashboardPage from './../Components/ExpenseDashboardPage';
import AddExpensePage from './../Components/AddExpensePage';
import EditExpensePage from './../Components/EditExpensePage';
import HelpPage from './../Components/HelpPage';
import NotFoundPage from './../Components/NotFoundPage';
import Header from './../Components/Header';





const AppRouter = () => (
 <BrowserRouter>
      <div>
        <Header />
        <Switch>
        <Route path="/create" component={AddExpensePage}/>
        <Route path="/" component={ExpenseDashboardPage}  exact={true}/>
        <Route path="/edit/:id" component={EditExpensePage}/>
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage}/>
        </Switch>
      </div> 
 </BrowserRouter>
);


export default AppRouter;