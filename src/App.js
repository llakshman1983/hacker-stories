import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import ProductInput from './Product/ProductInput';
import ProductOutput from './Product/ProductOutput';

import UserInput from './User/UserInput';
import UserOutput from './User/UserOutput';

function App() {

  class Prod extends React.Component {
       render() {
            return <b>{this.props.name}</b>
       }
  }


  return (
<div>
   
    <ProductInput/>
    <ProductOutput/>
    
    <UserInput/>
    <UserOutput name="Lakshmanakumar"/>

    <UserOutput name="Ramkumar"/>

    <UserOutput name="K"/>


    </div>
  )
}


export default App;


