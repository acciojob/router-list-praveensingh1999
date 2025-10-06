import React from 'react';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';

const App = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Show the list only on the main page
  const showList = location.pathname === '/';

  return (
    <div>
      {showList && (
        <>
          <h1>List Items</h1>
          <ul>
            <li><button onClick={() => navigate('/items/1')}>Item 1</button></li>
            <li><button onClick={() => navigate('/items/2')}>Item 2</button></li>
            <li><button onClick={() => navigate('/items/3')}>Item 3</button></li>
          </ul>
        </>
      )}

      <Routes>
        <Route path='/items/1' element={<Page1 />} />
        <Route path='/items/2' element={<Page2 />} />
        <Route path='/items/3' element={<Page3 />} />
      </Routes>
    </div>
  );
};

export default App;
