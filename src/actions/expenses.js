import {v4 as uuid} from 'uuid';
import database from '../firebase/firebase';

export const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense
    
});

export  const startAddExpense = (expenseDate = {}) => {

            return (dispatch) => {

                const {
                    description = '',
                    note = '',
                    amount = 0,
                    createdAt = 0
                } = expenseDate;


                const expense = {description, note, amount, createdAt};

                database.ref('expenses').push(expense).then((ref) => {

                    dispatch(addExpense({
                            id: ref.key,
                            ...expense
                    }));

                });

            }
}
export const removeExpense = ({id} = {}) => ({

    type: 'REMOVE_EXPENSE',
    id
});


export const editExpense = (id , update) => ({

    type: 'EDIT_EXPENSE',
    id,
    update

});


export const setExpenses = (expenses) => ({

        type: 'SET_EXPENSES',
        expenses
});



export const startSetExpenses = () => {

            return (dispatch) => {

                database.ref('expenses').once('value').then((snapshot) => {

                    const ArrayOfExpenses = [];
                    snapshot.forEach((childSnapshot) => {
                            ArrayOfExpenses.push({
                                id: childSnapshot.key,
                                ...childSnapshot.val()
                            });
                    });

                  dispatch(setExpenses(ArrayOfExpenses));
                });
            };
};
