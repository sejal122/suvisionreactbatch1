import React, { useState } from 'react'
 //function component
function Header(props) {
    let {username , lname} = props //destructuring of props
    const [counter , setCounter]=useState(10);
    const [name,setName]=useState('')
function increment(){
setCounter(counter+1)

}
function decrement(){
    setCounter(counter-1)
    }
    function displayName(e){
        console.log(e)
        setName(e.target.value)
    }

    return (
        <div>
          <h1> welcome : {username} {lname} 
          {5+6} 
           </h1>
        
          <h3>{counter}</h3> 
        <button onClick={increment} >increment</button>
        <button onClick={decrement} >decrement</button>
        <input id='nameinput' type='text' onChange={(e) => displayName(e)} ></input>
        <b> {name} </b>
       
        </div>
    )
}

export default Header




