import { Grid } from '@mui/material';
import { useContext, useEffect } from 'react';
import { PushToTalkButtonContainer, PushToTalkButton, ErrorPanel } from '@speechly/react-ui';

import './App.css';

import Main from './components/Main/Main';
import Stats from './components/Stats/Stats';

import  { BudgetContext } from './context/budgetContext'; 

const App = () => {
    const { transactions, loadTransactions } = useContext(BudgetContext);

    useEffect(() => {
        loadTransactions();
    }, [transactions]);

    return (
        <>
            <Grid container spacing={1} alignItems="center" justifyContent="center" alignContent="center">
                <Grid item sm={12} lg={4} order={{ lg: 1, xs: 2 }} display="flex" justifyContent="center">
                    <Stats title="Income"/>
                </Grid>
                <Grid item sm={12} lg={4} order={{ lg: 2, xs: 1 }}  display="flex" justifyContent="center">
                    <Main/>
                </Grid>
                <Grid item sm={12} lg={4} order={{ lg: 3, xs: 3 }} display="flex" justifyContent="center">
                    <Stats title="Expense"/>
                </Grid>
            </Grid>
            <div className='float'>
                <PushToTalkButton/>
                <ErrorPanel/>
            </div>
        </>
    )
}

export default App;
