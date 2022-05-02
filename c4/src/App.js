
import "./App.css";
import { Routes,Route, useNavigate, BrowserRouter } from "react-router-dom";
import { useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { MainRoutes } from "./Routes/MainRoutes";

function App() {

  const navigate=useNavigate();

  useEffect(() => {
    navigate("/home")
  }, [])
  
  return (
    <div>
      <Navbar/>
   
    <div className="App">
      <MainRoutes/>
    </div>
    </div>
  );
}

export default App;
