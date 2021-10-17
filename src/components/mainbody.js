import React from "react";
import "./index.css";
import {Button,Input} from "antd";
import image2 from "../assets/ikabutura.jpg";
import image3 from "../assets/jumpsuits.jpg";
import image4 from "../assets/long dress.jpg";
import image5 from "../assets/shirt.jpg";
import image6 from "../assets/short dress.jpg";
import image7 from "../assets/skirt.jpg";
import image8 from "../assets/trouser.jpg";
import{Carousel} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
const { Search } = Input;
const Programs =()=>{
    return(
        <div class="container">
        <Carousel>
      <Carousel.Item>
          <div class="sliding">
        <img
        ClassName="caption"
          src={image4}
          alt="image" 
        />
        </div>
        <Carousel.Caption>
          <div className="caption">
          <h3>IKABUTURA</h3></div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <div class="sliding">
        <img
          src={image2}
          alt="image" 
        />
</div>
        <Carousel.Caption>
          <div className="caption">
          <h3>JUMPSUITS</h3></div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <div class="sliding">
        <img
          src={image3}
          alt="image"
        />
</div>
        <Carousel.Caption>
          <div className="caption">
          <h3>DRESSES</h3>
</div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <h2>Categories</h2>
    <div className="categories">
    <figure>
      <div className="figimage">
      <img src={image2}/></div>
      <figcaption>Price:19,000Frws </figcaption>
      <button style={{marginLeft:"20%",backgroundColor:"black",color:"white",marginBottom:"2%",borderRadius:"20px"}}>View More</button>
    </figure>
    <figure>
      <div className="figimage">
      <img src={image8}/></div>
      <figcaption>Price:12,000Frws </figcaption>
      <button style={{marginLeft:"20%",backgroundColor:"black",color:"white",marginBottom:"2%",borderRadius:"20px"}}>View More</button>
    </figure>
    <figure>
      <div className="figimage">
      <img src={image3}/></div>
      <figcaption>Price:15,000Frws </figcaption>
      <button style={{marginLeft:"20%",backgroundColor:"black",color:"white",marginBottom:"2%",borderRadius:"20px"}}>View More</button>
    </figure>
    <figure>
      <div className="figimage">
      <img src={image5}/></div>
      <figcaption>Price:10,000Frws </figcaption>
      <button style={{marginLeft:"20%",backgroundColor:"black",color:"white",marginBottom:"2%",borderRadius:"20px"}}>View More</button>
    </figure>
    <figure>
      <div className="figimage">
      <img src={image6}/></div>
      <figcaption>Price:14,000Frws </figcaption>
      <button style={{marginLeft:"20%",backgroundColor:"black",color:"white",marginBottom:"2%",borderRadius:"20px"}}>View More</button>
    </figure>
    <figure>
      <div className="figimage">
      <img src={image7}/></div>
      <figcaption>Price:18,000Frws </figcaption>
      <button style={{marginLeft:"20%",backgroundColor:"black",color:"white",marginBottom:"2%",borderRadius:"20px"}}>View More</button>
    </figure>
    
    </div></div>
  )
}
export default Programs;