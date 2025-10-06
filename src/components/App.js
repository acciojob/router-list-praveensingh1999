
import React from "react";
import page1 from './page1'
import page2 from './page2'
import page3 from './page3'
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
        <Route path='/items/:1' element={<page1/>}/>
         <Route path='/items/:2' element={<page2/>}/>
         <Route path='/items/:3' element={<page3/>}/>
         
         <Route path='*' element={<Error/>}></Route>
       </Routes> 
    </div>
  )
}

export default App
