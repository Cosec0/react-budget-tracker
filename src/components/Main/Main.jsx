import { useContext } from 'react';
import { Card, CardContent, Typography, CardHeader, Divider  } from '@mui/material';
import Form from './Form/Form';
import ListComponent from './List/ListComponent';

import { BudgetContext } from '../../context/budgetContext';

const Main = () => {
  const { transactions } = useContext(BudgetContext);
  const total = transactions.reduce((sum, transaction) => {
    if(transaction.type === 'Income') return sum += transaction.amount;
    else return sum -= transaction.amount;
  }, 0);
  
  return (
    <Card sx={{ minWidth: '20rem', maxWidth: '40rem',  height: '90%'}}>
        <CardHeader title="Expense Tracker"  subheader="Made with &#128147; by Kosu" />
        <CardContent>
          <Typography variant="h5" component="div" align="center">
            Total Balance {total < 0 ? '-' : ''}&#x20B9;{Math.abs(total)}
          </Typography>
          <Typography variant="body1" align="center">
            Try Saying <br/> Add Expense 50 for Category Travel for Thursday
          </Typography>
          <Divider light />
          <Form/>
          <Divider light />
          <ListComponent/>
        </CardContent>
    </Card>
  );
}

export default Main;
