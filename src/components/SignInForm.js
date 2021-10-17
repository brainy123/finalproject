import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import Footer from "../components/footer";
import Header from "../components/header";
import {Link} from "react-router-dom";
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import "./index.css";

const SignInForm = () => {
  const onFinish = async(values) => {
    console.log("values", values); 
     //console.log('Received values of form: ', values);
  };
  return (
      <>
      <Header/>
      <div class="login">
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      <Form.Item
        name="email"
        rules={[{required: true, message: 'Please input your Email!' }]}
      >
     <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="your Email" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Please input your Password!' }]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
          <Link to="/DashboardLayout"> 
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button> 
           </Link> 
        Or  <a href="/signUp">Create Account</a>
      </Form.Item>
    </Form>
</div>
<Footer/>
</>
  );
};
export default SignInForm;
