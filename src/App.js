import React from "react"
import './App.css';
import Header from "./Header"
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Widgets from "./Widgets";
import Login from "./Login";
import { useStateValue } from "./StateProvider";
import {useEffect} from 'react'
import {useState} from 'react'


function App() {

  const [{user}, dispatch] = useStateValue();
  return (
    <div className="app">
      
      {!user ? (<Login/>) : (
        <>
      <Header/>
      <div className="app_body">
      <Sidebar/>

      <div className="app-middle">
      <Feed/>
      </div>
      <Widgets></Widgets>
        </div>
      </>
      )}

      



    </div>
    

  );
}

export default App;
