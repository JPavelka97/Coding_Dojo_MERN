import React from 'react'

import {Routes, Route, Link} from 'react-router-dom'
import './App.css';
import DashboardPage from './views/Dashboard'
import Detail from './views/Detail'
import EditPage from './views/EditPage';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/products' element={<DashboardPage />}/>
        <Route path='/products/:id' element={<Detail />}/>
        <Route path='/products/:id/edit' element={<EditPage />}/>
      </Routes>
    </div>
  );
}

export default App;
