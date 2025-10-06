
import React from "react";
import Page1 from './Page1'
import Page2 from './Page2'
import Page3 from './Page3'
import { Route,Routes } from 'react-router-dom'
import './../styles/App.css';
import { Link } from 'react-router-dom'

const App = () => {
  return (
    <div>
        <h1>List Items</h1>
    <ul>
        <li> <a href="/items/:1">item 1</a></li>
         <li> <a href="/items/:2">item 2</a></li>
          <li> <a href="/items/:3">item 3</a></li>
    </ul>
         
   
    

    <Routes>
        <Route path='/items/:1' element={<Page1/>}/>
         <Route path='/items/:2' element={<Page2/>}/>
         <Route path='/items/:3' element={<Page3/>}/>
         
         <Route path='*' element={<Error/>}></Route>
       </Routes> 
    </div>
  )
}

export default App
