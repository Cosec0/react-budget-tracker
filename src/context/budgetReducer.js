import dummyData from '../constants/dummyData';

const budgetReducer = (state, action) => {
    let newState;
    switch(action.type) {   
        case 'ADD_TRANSACTION':
            newState = [action.payload, ...state];
            localStorage.setItem('transactions', JSON.stringify(newState));
            return [action.payload, ...state];
        case 'DELETE_TRANSACTION':
            newState = state.filter(transaction => transaction.id !== action.payload);
            localStorage.setItem('transactions', JSON.stringify(newState));
            return state.filter(transaction => transaction.id !== action.payload);
        case 'INITIALIZE_TRANSACTIONS':
            if(localStorage.getItem('transactions')) {
                return JSON.parse(localStorage.getItem('transactions'));
            }
            else {
                return dummyData;
            }
        default:
            return state;
    }
}

export default budgetReducer;