import { useContext } from 'react';
import { ListItem, ListItemAvatar, Avatar, ListItemText, IconButton } from '@mui/material';
import { AttachMoney, MoneyOff, Delete } from '@mui/icons-material';

import { BudgetContext } from '../../../context/budgetContext';

const Transaction = ({ transaction }) => {
    const { deleteTransaction } = useContext(BudgetContext);
    return (
        <>
            <ListItem 
                key={transaction.id}  
                secondaryAction={
                    <IconButton edge="end" onClick={() => deleteTransaction(transaction.id)}>
                        <Delete />
                    </IconButton>
            }>
                <ListItemAvatar>
                    <Avatar  sx={{ backgroundColor: transaction.type === 'Income' ? 'green' : 'red' }}>
                        {
                            transaction.type === 'Income' ? <AttachMoney/> : <MoneyOff/>
                        }
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary={transaction.category} secondary={"₹" + transaction.amount + ", " + transaction.date} />
            </ListItem>
        </>
    )
}

export default Transaction;
