import React from 'react';
import ReactDOM from 'react-dom';
import { SpeechProvider } from '@speechly/react-client';

import App from './App';
import { BudgetProvider as Provider } from './context/budgetContext';

ReactDOM.render(
    <SpeechProvider appId={process.env.REACT_APP_SPEECHLY_API_KEY} language='en-US'>
        <Provider>
            <App/>
        </Provider>
    </SpeechProvider>, 
    document.getElementById('root')
);