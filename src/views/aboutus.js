import React from "react";
import Header from "../components/header";
import image1 from "../assets/laurence.png";
import image2 from "../assets/iradukunda.png";
import image3 from "../assets/clemence.png";
import Footer from "../components/footer";
import { Button } from 'antd';
import "../index.css";
const Aboutus=()=>{
return(
    <>
    <Header/>
    <h1 style={{textAlign:"center"}}>Meet Team</h1>
    <div className="team">
    <div className="card">
<div className="cardimage">
<img src={image1}/></div>
<div className="details">
<h4>UWIMANA Laurence</h4>
<p> Front-End Developer</p>
<Button type="button" htmlType="submit" style={{backgroundColor:"black",color:"white",marginLeft:"25%",fontSize:"18px"}}> Contact Me</Button>
</div></div>
<div className="card">
<div className="cardimage">
<img src={image2}/></div>
<div className="details">
<h4>IRADUKUNDA M.Reine</h4>
<p> Back-End Developer</p>
<Button type="button" htmlType="submit" style={{backgroundColor:"black",color:"white",marginLeft:"25%",fontSize:"18px"}}> Contact Me</Button>
</div></div>
<div className="card">
 <div className="cardimage">
<img src={image3}/></div>
<div className="details">
<h4>AKAMALIYA Clemence</h4>
<p>Full-Stack Developer</p>
<Button type="button" htmlType="submit" style={{backgroundColor:"black",color:"white",marginLeft:"25%",fontSize:"18px"}}> Contact Me</Button>
</div></div>
</div>
<div className="madeinrw">
    <p><b>Why To Trust Us</b> 
    <ul>
    <li>It takes 3 hours or less of delivering product(s) in Kigali.</li> 
    <li>In the other provinces it is(1) day per week by transportation agencies  with negotiable price.</li></ul>
     </p>
     <h6>We are supposed to include Vision,Mission Of our system on this page in form of cards</h6>
</div>
<Footer/>
    </>
);
}
export default Aboutus;