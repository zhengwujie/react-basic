import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// 记录页面性能

ReactDOM.render(
    // 严格模式
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.getElementById('root')
);
