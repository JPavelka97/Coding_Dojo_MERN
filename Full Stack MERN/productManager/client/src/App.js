import React from 'react'

import {Routes, Route, Link} from 'react-router-dom'
import './App.css';
import DashboardPage from './views/Dashboard'
import Detail from './views/Detail'

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/products' element={<DashboardPage />}></Route>
        <Route path='/products/:id' element={<Detail />}></Route>
      </Routes>
    </div>
  );
}

export default App;
