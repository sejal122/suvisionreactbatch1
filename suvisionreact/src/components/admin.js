import React, { useState } from "react";
import Form from 'react-bootstrap/Form';

 function Admin() {
  
  let data = {
    title: "iPhone 15 pro",
    price: 509.95,
    description: "Your perfect iphone for your everyday needs. iphn 15",
    category: "mobile phones",
    image:
      "data:image/jpeg;base64,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",
    rating: { rate: 4.9, count: 820 },
  };
const [newData,setNewData]=useState({
  title:'',
  price:null,
  description:'',
  category:'',
  image:''
})
 const addData =(event)=>{
    event.preventDefault();

// fetch("/db.json")
// .then(res=>{return res.json()})
// .then((data)=>console.log(data))

    fetch("http://localhost:3030/products", { 
      
    // Adding method type 
    method: "POST", 
      
    // Adding body or contents to send 
    body: JSON.stringify(newData), 
      
    // Adding headers to the request 
    headers: { 
        "Content-type": "application/json; charset=UTF-8"
    } 
}) 
//Converting to JSON 
.then(response => response.json()) 
// Displaying results to console 
.then(json => console.log(json)); 
  }
   
  return (
    <div style={{width:'60%',textAlign:'center'}}>
      <Form onSubmit={addData}>
      <Form.Group className="mb-3" id="title">
        <Form.Label>Title:</Form.Label>
        <Form.Control type="text" onChange={(event)=>{setNewData({...newData,title:event.target.value})}} />
      </Form.Group>
      <Form.Group className="mb-3" id="price">
        <Form.Label>Price:</Form.Label>
        <Form.Control type="number"  onChange={(event)=>{setNewData({...newData,price:event.target.value})}}/>
      </Form.Group>
      <Form.Group className="mb-3" id="category">
        <Form.Label>Category:</Form.Label>
        <Form.Control type="text"  onChange={(event)=>{setNewData({...newData,category:event.target.value})}}/>
      </Form.Group>
      <Form.Group className="mb-3" id="imageurl">
        <Form.Label>Image url:</Form.Label>
        <Form.Control type="url" onChange={(event)=>{setNewData({...newData,image:event.target.value})}} />
      </Form.Group>
      <Form.Group className="mb-3" id="desc">
        <Form.Label>Description:</Form.Label>
        <Form.Control as="textarea" rows={3} onChange={(event)=>{setNewData({...newData,description:event.target.value})}}/>
      </Form.Group>
      <Form.Control type="submit"  />
    </Form>

      {/* <button onClick={addData}>addData</button> */}
    </div>
  );
}

export default Admin;
