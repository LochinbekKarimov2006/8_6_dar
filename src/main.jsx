// index.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import './App.css';
import { MyProvider } from './context/useContext.jsx'; // .js dan .jsx ga o'zgartiring

ReactDOM.createRoot(document.getElementById('root')).render(
    <MyProvider>
        <App />
    </MyProvider>
);
