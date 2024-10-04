import React, { useEffect, useState } from "react";
import Ecomheader from "./ecomheader";
import Carousel from "react-bootstrap/Carousel";
import "./ecomhome.css";
import '../App.css'
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import {Link} from 'react-router-dom'

function Ecomhome() {

  const [productData,setProductsData]=useState([ ])

  useEffect(()=>{
  
    fetch('http://localhost:3030/products').then(
      (res)=>{
        console.log(res)
        
        return res.json()
      }
    ).then((data)=>{
      console.log(data.products)
      setProductsData(data)
    })
  },[])
  return (
    <div>
      <Ecomheader />

      <Carousel>
        <Carousel.Item interval={1500}>
          <img
            className="d-block w-100"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZFqYNj969Jr1puSdkg6zdg6O_hYRHyemcag&s"
            alt="Image One"
          />
          <Carousel.Caption>
            <h3>Label for first slide</h3>
            <p>Sample Text for Image One</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src="https://media.geeksforgeeks.org/wp-content/uploads/20210425122716/1-300x115.png"
            alt="Image Two"
          />
          <Carousel.Caption>
            <h3>Label for second slide</h3>
            <p>Sample Text for Image Two</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div id="recentItems">
        <Container>
          <Row style={{rowGap:'20px'}}>
           

            {productData?.map((p)=>{
              console.log(productData)
              return <Col> <Card style={{ width: "18rem" }}>
              <Card.Img
              id='cardImg'
                variant="top"
                src={p.image}
              />
              <Card.Body>
                <Card.Title>{p.title}</Card.Title>
                <Card.Text>
             
                  <b id='price'>${p.price}</b>
                </Card.Text>
                
                <Button class='amazonBtn ' id='buynow' >Buy now</Button>  <Button class='amazonBtn'> <Link to={`/details/${p.id}`}>see more</Link></Button><br/>
                <Button class='amazonBtn ' id='addtocart'>Add to cart</Button>
                <Link to={`/update/${p.id}`}> <Button class='amazonBtn ' id='delete'>Update</Button></Link>
                <Link to={`/delete/${p.id}`}> <Button class='amazonBtn ' id='delete'>Delete</Button></Link>
              </Card.Body>
            </Card></Col>
            })}
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Ecomhome;
