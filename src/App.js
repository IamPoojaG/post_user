import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Registration from './components/Registration';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Post from './components/Post';
import Photos from './components/Photos';

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route Exact path='/registration' element={<Registration />}></Route>
          <Route Exact path='/login' element={<Login />}></Route>
          <Route Exact path='/' element={<Home />}></Route>
          <Route Exact path='/post' element={<Post />}></Route>
          <Route Exact path='/photos' element={<Photos />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
