import './App.css';
import { Card } from './Card';

function App() {
  let arr =[{name:"Akhil TJ",email:"akhiltj@getDefaultNozer.com",key:1,phone:984685656},
    {name:"Kiran" ,email:"Kiran@getDefaultNozer.com",key:2,phone:984685346},
    {name:"Amal james",email:"amaliltj@getDefaultNfgr.com",key:3,phone:98468546},
    {name:"Akhil TJ",email:"akhiltj@getDefaultNozer.com",key:4,phone:984685656},
    {name:"Kiran" ,email:"Kiran@getDefaultNozer.com",key:5,phone:984685346},
    {name:"Amal james",email:"amaliltj@getDefaultNfgr.com",key:6,phone:98468546},
    {name:"Akhil TJ",email:"akhiltj@getDefaultNozer.com",key:7,phone:984685656}
  ]

  return (
    <div className="App">
    <Card obj={{arr}} />
    </div>
  );
}

export default App;
