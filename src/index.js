import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import * as serviceWorker from './service-worker';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import * as atatus from 'atatus-spa';

atatus.config('69cd6b33df174b78b5d3d607504fd3a9').install();
ReactDOM.render(<App />, document.getElementById('root'));

//const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(
//  <React.StrictMode>
//    <App />
//  </React.StrictMode>
//);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
//serviceWorkerRegistration.unregister();
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

//atatus.notify(new Error('Test Atatus Setup'));