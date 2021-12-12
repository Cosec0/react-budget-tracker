import { createContext, useReducer } from "react";

import budgetReducer from "./budgetReducer";
import budgetActions from "./budgetActions";

const initialState = [];

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