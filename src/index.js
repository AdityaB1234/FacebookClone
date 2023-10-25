import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { StateProvider } from './StateProvider';
import reducer, { initialState} from './REducer';
import { BrowserRouter } from 'react-router-dom';
import { PostsContextProvider } from './context/postContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
    <PostsContextProvider>
    <App />
    </PostsContextProvider>
    
    
    
    </StateProvider>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

