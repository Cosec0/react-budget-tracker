import { useContext } from 'react';
import { List, Typography } from '@mui/material';

import Transaction from './Transaction';
import { BudgetContext } from '../../../context/budgetContext';


const ListComponent = () => {
    const { transactions } = useContext(BudgetContext);

    return (
        <>
            {
                transactions.length > 0 ?
                (
                    <Typography variant="body1" sx={{ mt: "1rem" }} >
                        Transactions history
                    </Typography>
                ) : ''
            }
            <List sx={{ maxHeight: '150px', overflow: 'auto' }}>
                {
                    transactions.map(transaction => (
                        <>
                            <Transaction transaction={transaction}/>
                        </>
                    ))
                }
            </List> 
        </>
    )
}

export default ListComponent;
