const budgetActions = {
    addTransaction: (transaction) => ({
        type: 'ADD_TRANSACTION',
        payload: transaction
    }),
    deleteTransaction: (id) => ({
        type: 'DELETE_TRANSACTION',
        payload: id
    }),
    loadTransactions: () => ({
        type: 'INITIALIZE_TRANSACTIONS'
    })
}

export default budgetActions;