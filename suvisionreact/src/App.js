import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header";
import { useState } from "react";
import Unknownuser from "./components/unknownuser";
import Existinguser from "./components/existinguser";
import Navbar from "react-bootstrap/Navbar";
import Employeedetails from "./components/employeedetails";
import Lifecyclemethods from "./components/lifecyclemethods";
import {Routes,Route} from 'react-router-dom'
import Ecomhome from "./components/ecomhome";
import Ecomlogin from "./components/ecomlogin";
import Errorpage from "./components/errorpage";
import Details from "./components/details";
import Errorexample from "./components/errorexample";
import Errorboundary from "./components/errorboundary";
import Admin from "./components/admin";
import Deletedata from "./components/deletedata";
import Updateproduct from "./components/updateproduct";
function App() {
  let name = "sejal";
  let lname = "gujar";
  const [isNewUser, setNewUser] = useState(false);
  const todos = ["task1", "task2", "task4", "task5", "task6"];

  const listItems = todos.map((todo) => <li>{todo}</li>);
  const filtereddata =todos.filter(todo => todo ==='task4')
  return (
    <div className="App">
      
      
      <div id='Apphome'>
      <Routes>

<Route path='/' element={<Ecomhome/>}/>
<Route path='/login' element={<Ecomlogin/>}/>
<Route path='*' element={<Errorpage/>}/>
<Route path='/details/:id' element={<Details/>}/>
<Route path='/admin' element={<Admin/>}/>
<Route path='/delete/:id' element={<Deletedata/>}/>
<Route path='/update/:id' element={<Updateproduct/>}/>
</Routes>
      </div>
      

      {/* <Header username={name} lname={lname}/>

      <button onClick={() => setNewUser(true)}>New user</button>
      <button onClick={() => setNewUser(false)}>Existing user</button>

      {isNewUser && <Existinguser />}

      <ul>{listItems}</ul>

    {
      todos.map(mytodo => {
        return <li>{mytodo}</li>
      }
        
        )
    }
{filtereddata}
 */}
{/* <Employeedetails/>
<Lifecyclemethods name='sejal'/> */}


    </div>
  );
}

export default App;
