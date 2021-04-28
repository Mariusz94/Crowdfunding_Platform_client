import React from 'react';
import ReactDOM from 'react-dom';

import {App} from './App.js';
import {AuthProvider} from './auth-context';

ReactDOM.render(
    <AuthProvider>
        <App />
    </AuthProvider>, document.getElementById('root'));
