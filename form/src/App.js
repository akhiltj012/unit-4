
import './App.css';
import {useState} from "react"
import Fetch from "./components/Fetch"
import Form from "./components/Form"
function App() {
  const[show, setShow] = useState(true)
  return (
    <div className="App">
      <button onClick={()=>setShow(!show)}>{show? "Upload Details":"Check Details"}</button>
      {show&& <Fetch  />}{!show&&<Form/>}
      
    </div>
  );
}

export default App;
