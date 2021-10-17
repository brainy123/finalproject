import React, { useState } from 'react';
import Footer from "../components/footer";
import Header from "../components/header";
import {useHistory} from "react-router-dom";
import "./index.css";
import {
  Form,
  Input,
  Select,
  Button,notification,
InputNumber,Cardgit 
} from 'antd';

const { Option } = Select;
const SignUpForm = () => {
  const history = useHistory();
  const onFinish = async(values) => {


  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 70 }}>
        <Option value="86">+250</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  );
  return (
      <>
      <Header/>
   <div className="signup" style={{border:"1px solid black",padding:"3% 7% 3% 7%"}}>
      <h1 style={{marginBottom:"10%"}}> Create Account</h1>
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
    <Form.Item
      name="names"
      rules={[{ required: true, message: 'Please input your  Names!' }]}
    >
      <Input placeholder="Firstname" />
    </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input type="password" placeholder="password"/>
      </Form.Item>
      <Form.Item
        name="email"
        rules={[{type:"email", required: true, message: 'Please input your email !' }]}
      >
        <Input  placeholder="customer@gmail.com" />
      </Form.Item>
      <Form.Item
        name="phone Number"
        rules={[{ required: true, message: 'Please input your phone!' }]}
      >
        <Input
          type="text"
          placeholder="your phone number"
        />
      </Form.Item>
      <Form.Item> 
        <Button type="button" htmlType="submit" className="login-form-button" style={{backgroundColor:"black",color:"white",marginLeft:"40%",marginTop:"7%"}}>
          Register
        </Button>

        </Form.Item>
    </Form>
    </div>
    <Footer/>
    </>
  );
};
export default SignUpForm;