import React,{useEffect} from 'react'
import {useParams} from 'react-router-dom'
function Updateproduct() {
    const {id}=useParams();
    const updateItem=async ()=>{
        fetch(`http://localhost:3030/products/${id}`,{
            method:'PATCH',
            body: JSON.stringify({
                title:'newtitle',
                price:59089
              }),
            headers: { "Content-Type": "application/json" }
        })
        .then(res=>res.json())
        .then(data=>{console.log(data)});
    }
    useEffect(()=>{
        updateItem();
    })
    return (
        <div>Updated!</div>
    )
}

export default Updateproduct
