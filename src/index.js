import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import'./Services/i18n';
import { BrowserRouter as Router } from 'react-router-dom';
import i18n from './Services/i18n';

let lang = window.location.pathname.split("/")[1];
if(lang && Object.keys(i18n.services.resourceStore.data).includes(lang)){
    i18n.changeLanguage(lang)
} else{
    //GET LANG FROM COOKIE AND REDIRECT
    let cookie = document.cookie.split(";").map(entry=>entry.split("=")).find(entry=>entry[0]==="i18next")
    //IF NO COOKIE, EN IS DEFAULT
    cookie = cookie ? cookie[1] : "en";
    window.location.pathname = cookie;
}



ReactDOM.render(
    <Router basename={lang}>
        <App />
    </Router>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
