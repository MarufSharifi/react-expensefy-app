import {createStore, combineReducers} from 'redux'


// expense reducer

const addExpense = ({description = '', note = '', amount = 0, createdAt = 0}) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: 'ewlksdiowklsd',
        description,
        note,
        amount,
        createdAt
    }
    

});


const removeExpense = ({description} = {}) => ({

    type: 'REMOVE_EXPENSE',
    description
});


const editExpense = (description , update) => ({

    type: 'EDIT_EXPENSE',
    description,
    update

});

const expensesReducerDefaultState = [];

const expenseReducer = (state = expensesReducerDefaultState , action) => {

    switch(action.type){  
        case 'ADD_EXPENSE' :
          return [
              ...state,
              action.expense
    ]
        case 'REMOVE_EXPENSE' :
            return state.filter(({description }) => description !== action.description);

        case 'EDIT_EXPENSE' :
           return state.map((expense) => {
               if(expense.description === action.description){

                    return {
                        ...expense,
                        ...action.update
                    }
               }else {
                   return expense;
               }
           })
        default:
            return state;
    };
};


// Filters Reducers


const setTextFilter = ( text = '') => ({

    type: 'SET_TEXT_FILTER',
    text
});


const sortByAmount = () => ({
        type: 'SORT_BY_AMOUNT',
});


const sortByDate = () => ({
    type: 'SORT_BY_DATE'
});

const setStartDate = (startDate) => ({
        type: 'SET_START_DATE',
        startDate
});

const setEndDate = (endDate) => ({
        type: 'SET_END_DATE',
        endDate    
});


const filtersReducerDefaultState = {
    text:'', 
    sortBy: 'date',
     startDate: undefined, 
     endDate: undefined
    };

const filtersReducers = (state = filtersReducerDefaultState, action) => {
    switch(action.type){
        case 'SET_TEXT_FILTER' :
            return {
                ...state,
                text: action.text
            }
        case 'SORT_BY_AMOUNT' :
            return {
                ...state,
                sortBy: 'amount'
            }
        case 'SORT_BY_DATE' :
            return {
                ...state,
                sortBy: 'date'
            }

        case 'SET_START_DATE' :
            return{
                ...state,
                startDate: action.startDate
            }
        case 'SET_END_DATE' :
            return{
                ...state,
                endDate: action.endDate
            }
        default:
            return state;
    }
}


// get visible expenses

const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {

        return expenses.filter((expense) => {
                const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
                const endDatematch = typeof endDate !== 'number' || expense.createdAt <= endDate;
                const textMatch = expense.description.toLowerCase().includes(text.toLowerCase);

                // return startDateMatch & endDatematch & textMatch; 
                return true;  
        }).sort((a, b) => {

            if(sortBy === 'date'){
                return a.createdAt <= b.createdAt ? 1 : -1;
            }else {
                return a.amount >= b.amount ? 1 : -1;
            }
        });
};

// store creation

const store = createStore(combineReducers({
    expenses: expenseReducer,
    filters: filtersReducers
}));


store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});


const expenseOne = store.dispatch(addExpense({description: 'rent', amount: 100, createdAt: -21000}));
const expenseTwo = store.dispatch(addExpense({description: 'coffee', amount: 300, createdAt: -1000}));


// store.dispatch(removeExpense({description: expenseTwo.expense.description}));
// store.dispatch(editExpense(expenseOne.expense.description, {amount: 500, id: 'ls anifd skdhds'}));

// store.dispatch(setTextFilter('rent'));
// store.dispatch(setTextFilter());


// store.dispatch(sortByAmount());
// store.dispatch(sortByDate());


// store.dispatch(setStartDate(-200));
// store.dispatch(setStartDate());

// store.dispatch(setEndDate(2345));
// store.dispatch(setEndDate());

const demoState = {
    expenses: [{
        id: 'slkd aklds ',
        description: 'janurey rent',
        note: 'this was the final payment for this address',
        amount: 3400,
        createdAt: 0
    }],

    filters: {
        text: 'rent',
        sortBy: 'amount', // amount or date
        startDate: undefined,
        endDate: undefined
    }
}



