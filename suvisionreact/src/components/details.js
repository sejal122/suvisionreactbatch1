import React, { useEffect, useState } from 'react'
import './details.css'
import {useParams} from 'react-router-dom'
function Details() {
const {id}=useParams();
const [item,setItem]=useState(null)
const fetchItem=async ()=>{
    let f = await fetch(`http://localhost:3030/products/${id}`);
    const jsondata=await f.json();
    setItem(jsondata)
    console.log(item)
}
useEffect( ()=>{
    
    fetchItem();
},[])
    return (
        <div id='detailsHome'>
            <div id='img'>
                <img id='image' src={item?item.image:""} />
            </div>
            <div id='details'>
                <p style={{fontSize:'1.2rem',fontWeight:'700'}}> {item?item.title:""}</p>
                <h5 >{item?item.description:""}</h5>
                <h3>${item?item.price:""}</h3>
            </div>
        </div>
    )
}

export default Details
