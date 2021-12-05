import { createContext, useReducer } from "react";

import budgetReducer from "./budgetReducer";
import budgetActions from "./budgetActions";

const initialState = [
    // {id: 1, type: 'Income', amount: 40000, category: 'Salary'},
    // {id: 2, type: 'Expense', amount: 20000, category: 'Gaming'},
    // {id: 3, type: 'Expense', amount: 2000, category: 'Comics'}
    // {
    //     id: "d37e9380-3cfc-4f12-9acd-a8090bca1941",
    //     type: "Income",
    //     category: "Deposits",
    //     amount: 9999,
    //     date: "2021-12-05"
    // },
    // {
    //     id: "d37e9380-3cfc-4f12-9acd-a8090bca1941",
    //     type: "Expesne",
    //     category: "Deposits",
    //     amount: 99,
    //     date: "2021-12-04"
    // }

];

export const BudgetContext = createContext(initialState);

export const BudgetProvider = ({ children }) => {
    const [transactionsState, dispatch] = useReducer(budgetReducer, initialState);

    const addTransaction = (transaction) => dispatch(budgetActions.addTransaction(transaction));
    const deleteTransaction = (id) => dispatch(budgetActions.deleteTransaction(id));
    const loadTransactions = () => dispatch(budgetActions.loadTransactions());
     

    return (
        <BudgetContext.Provider value={{ 
            transactions: transactionsState,
            addTransaction,
            deleteTransaction,
            loadTransactions
         }}>
            { children }
        </BudgetContext.Provider>
    );
}