import React from 'react';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import { Route, Routes, Link } from 'react-router-dom';
import './../styles/App.css';

const App = () => {
  return (
    <div>
      <h1>List Items</h1>
      <ul>
        <li>
          <Link to='/items/1'>Item 1</Link>
        </li>
        <li>
          <Link to='/items/2'>Item 2</Link>
        </li>
        <li>
          <Link to='/items/3'>Item 3</Link>
        </li>
      </ul>

      <Routes>
        <Route path='/items/1' element={<Page1 />} />
        <Route path='/items/2' element={<Page2 />} />
        <Route path='/items/3' element={<Page3 />} />
      </Routes>
    </div>
  );
};

export default App;
