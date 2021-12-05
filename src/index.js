import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { BudgetProvider as Provider } from './context/budgetContext';

ReactDOM.render(
    <Provider>
        <App/>
    </Provider>, 
    document.getElementById('root')
);