import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from 'react-router-dom'; //웹페이지를 새로고침할 필요 없이 주소를 변경하고 관련된 정보를 쉽게 조회하거나 사용할 수 있도록 함.

ReactDOM.render(

<App />
,
 document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
