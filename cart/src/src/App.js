import React, { useEffect } from 'react';
import './App.css';
import { Routes,Route,useNavigate } from 'react-router-dom';
import { Cloths } from './components/Cloths';
import { Paintings } from './components/Paintings';
import { Electronics } from './components/Electronics';
import { Navbar } from './components/Navbar';
import { Home } from './components/Home';
import BasicTable from './components/Table';

function App() {
  const navigate=useNavigate();

  useEffect(() => {
    navigate("/home")
  }, [])
  
  return (
  <div>
      <div>
        <div>
          <Navbar/>
          <Routes>
            <Route path="/home" element={<Home/>}></Route>
            <Route path="/cloths/*" element={<Cloths/>}></Route>
            <Route path="/paintings" element={<Paintings/>}></Route>
            <Route path="/electronics" element={<Electronics/>}></Route>
          </Routes>
        </div>
      </div>
      <div>
        {/* <BasicTable/> */}
      </div>
  </div>  
  );
}

export default App;
