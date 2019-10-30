import React from 'react';
import logo from './logo.svg';
import {BrowserRouter} from 'react-router-dom'
import {Router} from './Router'
import {Link} from 'react-router-dom'
import './App.css';

const App=()=>{

     return (
      
           
        <BrowserRouter>
         <Router/>
         
        </BrowserRouter>
        

     )
}

export default App;
