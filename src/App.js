import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import ProductInput from './Product/ProductInput';
import ProductOutput from './Product/ProductOutput';

import UserInput from './User/UserInput';
import UserOutput from './User/UserOutput';

class App extends React.Component {

  /* state = {
    users: [
      {username:'Lakshmanakumar Loganathan', age: 20},
      {username:'Ramkumar Loganthan', age: 25},
      {username:'K L', age: 5}
    ]};
  */
    state = {
      username: "Lakshmanakumar"
    };
    
    
    usernameHandler = (newname) => {
      // DONT DO THIS - this.state.users[0].username = "LL";
      // alert('user name handler');
      // State of the application is changed - DOM is rendered again.
      // If Props or State changes - DOM is rendered again.
      //this.setState({username: "Ramkumar"});
      this.setState({username: newname});
    }

    usernameChangeHandler = (event) => {
      this.setState({username: event.target.value});
    }

  render() {
    return (
      <div>                   
         {
/*           <UserInput change={this.usernameHandler.bind(this, 'Kavinaya')}/>  */
         }
          <UserInput change={this.usernameChangeHandler}/>
          <button onClick={this.usernameHandler.bind(this, 'Kavinaya')} >Submit </button>
          
          <UserOutput username="Lakshmanakumar Loganathan"/>
          <UserOutput username="Ramkumar Loganthan"/>

          <br/>          
          <UserOutput username={this.state.username}/>
            
          </div>
        )  
  }
}
/* 
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
    <UserOutput username="Lakshmanakumar"/>
    <UserOutput username="Ramkumar"/>
    <UserOutput username="K"/>
    </div>
  )
}

*/
export default App;