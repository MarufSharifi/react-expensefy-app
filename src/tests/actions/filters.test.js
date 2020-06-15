import {setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate} from '../../actions/filters';
 import moment from 'moment';


test('shoud setup chang the text', () => {
        const action = setTextFilter('bye my dear');

        expect(action).toEqual({
            type: 'SET_TEXT_FILTER',
            text: 'bye my dear'
        });
})



test('should you can speack', () => {
    const action = setStartDate(moment(0));

    expect(action).toEqual({
        type:'SET_START_DATE',
        startDate: moment(0)
    })
});


test('should I fuck you ', () => {
    const action = setEndDate(moment(0));

    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    });
});