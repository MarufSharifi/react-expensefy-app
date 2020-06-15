import selectExpense from '../../selectors/expenses';

const expensesArray = [
{
    id: '1',
    description: 'gum',
    note: '',
    amount: 195,
    createdAt:0
},
{
    id: '2',
    description: 'rent',
    note: '',
    amount: 109500,
    createdAt:-1000
},
{
    id: '3',
    description: 'credit card',
    note: '',
    amount: 4500,
    createdAt:1000
}]

test('should i fuckin her', () => {
    const filters = {
        text: 'e',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    }
    const action = selectExpense( expensesArray, filters);

    expect(action).toEqual([expensesArray[2], expensesArray[1]]);
});