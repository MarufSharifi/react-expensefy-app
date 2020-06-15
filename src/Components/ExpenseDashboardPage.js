import React from 'react';
import ExpenseList from './ExpenseList'
import ExpenseListFilters from './ExpenseListFilters';
import ExpensetListFilters from './ExpenseListFilters';


const ExpenseDashboardPage = () => (
    <div>
       <ExpensetListFilters />
      <ExpenseList />
     
    </div>
);


export default ExpenseDashboardPage;
