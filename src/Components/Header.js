import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => (
    <div>
      <h1>Expensify</h1>
      <NavLink to="/" activeClassName="someChanges" exact={true}>Dashboard</NavLink>
      <NavLink to="/create" activeClassName="someChanges">Create Expense</NavLink>
      <NavLink to="/help" activeClassName="someChanges">Help</NavLink>
    </div>
    );


    export default Header;