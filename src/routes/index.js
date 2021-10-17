import React from 'react';
import {Switch,Route} from "react-router-dom";
import Home from "../views/home";
import Contactus from "../views/contactus";
import Product from "../views/product";
import Aboutus from "../views/aboutus";
import SignUpForm from "../components/signUp";
import SignInForm from "../components/SignInForm";
const Index=()=>{
  return (
    <Switch> 
      <Route component={SignInForm} path={["/SignInForm"]}/>
      <Route component={SignUpForm} path={["/signUp"]}/>
       <Route component={Aboutus} path={["/aboutus"]}/>
       <Route component={Product} path={["/product"]}/>
       <Route component={Contactus} path={["/contactus"]}/>
     <Route component={Home} path={["/home","/"]}/>
    </Switch>
  )
}
export default Index;