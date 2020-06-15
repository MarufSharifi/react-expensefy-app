import React from 'react';
import {connect} from 'react-redux';
import numeral from 'numeral';
import SelectExpenses from '../selectors/expenses';
import SelectExpensesTotal from '../selectors/expenses-total';


const ExpensesSummary = ({expenseCount, expensesTotal}) => {
    const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';
    const formattedExpensesTotal = numeral(expensesTotal).format('$0,0.00');
    return (
        <div>
            <h1>Viewing {expenseCount} {expenseWord} totalling {formattedExpensesTotal}</h1>
        </div>
    )
}

const mapStateToProps = (state) => {

    const visibleExpenses = SelectExpenses(state.expenses, state.filters);

    return {
        expenseCount: visibleExpenses.length,
        expensesTotal: SelectExpensesTotal(visibleExpenses)
    }

}

export default connect(mapStateToProps)(ExpensesSummary);