import { useContext } from 'react';

import { BudgetContext } from '../context/budgetContext';
import { incomeCategories, expenseCategories, resetCategories } from '../constants/categories';

const useTransactions = (title) => {
    resetCategories();
    const { transactions } = useContext(BudgetContext);

    const seletedTransactions = transactions.filter(transaction => transaction.type === title);

    let selectedCategories = title === 'Income' ? incomeCategories : expenseCategories;

    seletedTransactions.forEach(transaction => {
        for(let i = 0; i < selectedCategories.length; i++) {
            if(transaction.category === selectedCategories[i].type) {
                selectedCategories[i].amount += transaction.amount;
                console.log(`Adding ${transaction.amount} to ${selectedCategories[i].type} making it ${selectedCategories[i].amount}`);
                continue;
            }
        }
    });

    selectedCategories = selectedCategories.filter(category => category.amount > 0);

    const total = seletedTransactions.reduce((sum, transaction) => sum += transaction.amount, 0);

    let chartData = {};

    chartData = {
        datasets: [{
          label: `${title} Dataset`,
          data: selectedCategories.map(category => category.amount),
          backgroundColor: selectedCategories.map(category => category.color)
        }],
        labels: selectedCategories.map(category => category.type)
    };

    return { total, chartData, selectedCategories };
}

export default useTransactions;