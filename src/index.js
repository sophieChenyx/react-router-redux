import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import React from 'react';
import NewLoadable from '@/common/components/NewLoadable';
// import NewLoadable from '@/commom/components/NewLoadable';


// const App = lazy(() =>
// import( /* webpackChunkName:"App" */ /*webapckMode: "lazy*/'./App'));

const App = NewLoadable({ loader: () => import('./App') })

ReactDOM.render(
  <React.StrictMode>
    {/* <Suspense fallback={<h1>loading</h1>}> */}
    <App />
    {/* </Suspense> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
