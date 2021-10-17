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
const Product = () => {
  const onFinish = (values) => {
    console.log(values);
  };
  return (
      <>
      <Header/>
    <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages} 
    style={{width:"40%",backgroundColor:"#c7c7c7" ,marginLeft:"30%",marginRight:"3%",marginTop:"5%",borderRadius:"18% 0%",color:"red"}}>
        <h3 style={{textAlign:"center",color:"black"}}>Add Product  </h3>
      <Form.Item className="form" name={['user', 'name']} label="Name">
        <Input />
      </Form.Item>
      <Form.Item name={['user', 'price']} label="price">
        <Input />
      </Form.Item>
      <Form.Item name={['user', 'picture']} label="picture">
        <Input  type="file"/>
      </Form.Item>
      <Form.Item name={['user', 'numberofprod']} label="N.of Product">
        <Input type="number"/>
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit" style={{marginLeft:"20%"}}>
          Save
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

export default Product;