import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import FarmProduce from './FarmProduct/FarmProduct';
import ProductInput from './Product/ProductInput';
function getParentsName() {
  return welcome.dad + " " + welcome.mom;
}

const name = "Ka";
const welcome = {
  dad: "Lakshmanakumar",
  mom: "Ka"
};

const categoryList = [
  {
    id: 50,
    name: 'Vegetables',
    description: 'Vegetables',
    orderBy: '1'
  },
  {
    id: 51,
    name: 'Fruits',
    description: 'Fruits',
    orderBy: '2'
  }
];

function App() {
  const [searchTxt, setSearchTxt] = React.useState('');

  const handleChange  = event => {setSearchTxt('-'+ event.target.value)};
 // const handleChange = event => { console.log(event.target.value); }
  const categories = [
    {
      id: 50,
      name: 'Vegetables',
      description: 'Vegetables',
      orderBy: '1'
    },
    {
      id: 51,
      name: 'Fruits',
      description: 'Fruits',
      orderBy: '2'
    }
  ];

  class Prod extends React.Component {
       render() {
            return <b>{this.props.name}</b>
       }
  }

  //todos - state
  // setTodos - Method used to update the state
  const [todos, setTodos] = useState([
    {
      text: "Learn React",
      isDone: false
    },
    {
      text: "Eat Dinner",
      isDone: false
    },
    {
      text: "Code React",
      isDone: false
    }
  ]);

  return (
    <div><h1>Hello {getParentsName()}</h1>

      <FarmProduce/>

      <ProductInput/>
       <Prod name="Tomato"/>
      <label htmlFor="search">
      </label>
      <input type="text" id="search" onChange={handleChange} />
      {
        categoryList.map(function (item) {
          return (<div id={item.id}><span>{item.name}</span> <span>{item.orderBy}</span></div>)
        })
      }

       <List />
      <List />
      <Greeting name="kumar" id="K412"/>
      <Greeting name="Ram" id="S412"/>
      <Greeting name="Kavinaya" id="K512"/>

      <p>
        Searching for <strong>{searchTxt}</strong>.
      </p>      
    </div> 
  );
}

function Greeting(props) {
  return (<div>welcome  {props.name}  id :  {props.id}</div>);
}

function List() {
  return (<h2>-----</h2>);
}

function ListCategories() {
  return (
    <div>
      {
        categoryList.map(function (item) {
          return (<div id={item.id}><span>{item.name}</span> <span>{item.orderBy}</span></div>)
        })
      }
    </div>
  );
}


function App2() {
  return (<input type="text" name="srcLat"/>);
}
/* 
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React - 2002
        </a>
      </header>
    </div>
  );
}
*/

export default App;


