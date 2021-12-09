import React from 'react';
import ReactDOM from 'react-dom';
import { SpeechProvider } from '@speechly/react-client';

import App from './App';
import { BudgetProvider as Provider } from './context/budgetContext';

ReactDOM.render(
    <SpeechProvider appId='0a7fbb24-e628-453d-be53-d06d94fb7466' language='en-US'>
        <Provider>
            <App/>
        </Provider>
    </SpeechProvider>, 
    document.getElementById('root')
);