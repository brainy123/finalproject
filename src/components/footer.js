import React from "react";
import{InstagramOutlined ,TwitterOutlined,FacebookOutlined } from "@ant-design/icons";
import {FaFacebook} from "react-icons/fa";
import {FaInstagram} from "react-icons/fa";
import {FaTwitter} from "react-icons/fa";
import {Link} from "react-router-dom";
import "./index.css";
  const Footer =()=>{
      return(
            <div className="footer">
            <div class="socialmedia">
            <h4 style={{marginLeft:"2%"}}>FollowUs</h4> 
            <div class="logo" style={{display:"flex",marginLeft:"2%"}}>
           <Link to="#"><FaFacebook/></Link>
            <Link to="#"><FaInstagram/></Link>
           <Link to="#"> <FaTwitter/></Link></div>
</div>
<div class="contactus">
    <h4 style={{textAlign:"center"}}>ContactUs</h4>
    <p style={{marginTop:"7%"}}>PhoneNumber:0788987374,0788392931</p>
    <p>Email:madeinrw@gmail.com</p>
</div>
<div class="address">
    <h4 style={{textAlign:"center"}}>Address</h4>
    <div className="location">
        <p style={{marginLeft:"40%"}}>Kigali-Nyarugenge</p>
    </div>
</div>
            </div>
          )}
          export default Footer;
    