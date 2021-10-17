import React from "react";
import { Form, Input, Button } from 'antd';
import Header from "../components/header";
import Footer from "../components/footer";
import "../index.css";
const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 14 },
};
const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
  },
};
const Contactus = () => {
  const onFinish = (values) => {
    console.log(values);
  };

  return (
      <>
      <Header/>
    <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages} 
    style={{width:"40%",backgroundColor:"#c7c7c7" ,marginLeft:"30%",marginRight:"3%",marginTop:"5%",borderRadius:"18% 0%",color:"red"}}>
        <h3 style={{textAlign:"center",color:"black"}}>Leave Message </h3>
      <Form.Item className="form" name={['user', 'name']} label="Name">
        <Input />
      </Form.Item>
      <Form.Item name={['user', 'email']} label="Email" rules={[{ type: 'email' }]}>
        <Input />
      </Form.Item>
      <Form.Item name={['user', 'Phone']} label="Phone Number">
        <Input />
      </Form.Item>
      <Form.Item name={['user', 'message']} label="Message">
        <Input.TextArea />
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit" style={{marginLeft:"20%"}}>
          Send
        </Button>
        <Button type="danger" htmlType="reset" style={{marginLeft:"2%"}}>
          Cancel
        </Button>
      </Form.Item>
    </Form>
    <Footer/>
    </>
  );
};

export default Contactus;