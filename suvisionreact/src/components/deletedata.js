import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
function Deletedata() {
    const [deleteditem,setDeletedItem]=useState()
    const {id}=useParams();
    const deleteItem=async ()=>{
        fetch(`http://localhost:3030/products/${id}`,{
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{setDeletedItem(data);console.log(deleteditem);console.log(data.title)});
    }
    useEffect(()=>{
        deleteItem();
    })
    return (
        <div><h1>  deleted!</h1></div>
    )
}

export default Deletedata
