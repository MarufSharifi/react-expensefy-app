import React from 'react';
import ExpenseList from './ExpenseList'
import ExpenseListFilters from './ExpenseListFilters';
import ExpensetListFilters from './ExpenseListFilters';
import ExpensesSummary from './ExpensesSummary'

const ExpenseDashboardPage = () => (
    <div>
      <ExpensesSummary />
      <ExpensetListFilters />
      <ExpenseList />
     
    </div>
);


export default ExpenseDashboardPage;
