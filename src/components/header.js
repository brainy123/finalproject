import React,{useState,useEffect} from "react";
import { Menu,Modal,Button,Input} from 'antd';
import 'antd/dist/antd.css';
import "./index.css";
import image1 from "../assets/madeinrwanda.jpg";
import {Link} from "react-router-dom";
const { SubMenu } = Menu;
const Header =()=>{
  const [isModalVisible, setIsModalVisible] = useState(false);
    const showModal = () => {
      setIsModalVisible(true);
    };
    const handleOk = () => {
      setIsModalVisible(false);
    };
    const handleCancel = () => {
      setIsModalVisible(false);
    };
      const [current, setCurrent]=useState("home");
    const handleClick = e => {
      console.log('click ', e);
      setCurrent(e.key);
    };
    const { Search } = Input;
    const onSearch = value => console.log(value);
      return(
        <>
        <Modal  title="Login Panel" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
  <div style={{padding:"20px",backgroundColor:"red"}}>
  </div>
      </Modal>
         <div className="maincontainer" style={{display:"flex"}}>
         <img src={image1} alt="logo"/>
        <h3>MadeInRwandaBestShop</h3>
        <div>
         <Search
      placeholder="Search AnyThing u want"
      size="large"
      onSearch={onSearch}
     style={{marginTop:"7%",marginLeft:"160%",width:"150%"}}
    />
    </div>
        <div className="navs" onClick={handleClick} selectedKeys={[current]} mode="horizontal">
        <Link to ="/home">Home</Link> 
            <Link to ="/product">Product</Link>  
            <Link to ="/aboutus">About Us</Link>  
            <Link to ="/contactus">Contact Us</Link>  
           <Link to="/SignInForm">LogIn</Link>
       </div>
        </div>
        </>
        )
      }  
export default Header;