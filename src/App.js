import React, { useEffect, useState } from 'react';
// eslint-disable-next-line no-unused-vars
import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks=['Anowar', 'Rajib', 'Alomgir' , 'Manna','Bappa Raj','Sohel Rana','Atm Samsujjaman','Dildar','Riyaj','Shuvo']
  const products=[
    {name:'Photoshop', price:'$90.99'},
    {name:'Illustrator', price:'$60.99'},
    {name:'PDF Reader', price:'$6.99'},
    {name:'Adobe Premier Pro', price:'$20.99'},
    {name:'Adobe After Effects', price:'$200.99'},
    {name:'Adobe Animation', price:'$300.99'}
  ]
  const salarys=[
      {name:'Rahim', salary:'10000'},
      {name:'Karim', salary:'20000'},
      {name:'Abir', salary:'30000'},
    
  ]
  const nayokName=nayoks.map(a=>a);
  console.log(nayokName);
  const productName=products.map(b=>b);
  console.log(productName);
  return (
    <div className="App">
      <header className="App-header">
        <p>I am a react person</p>
        <Count></Count>
        <Name></Name>
        <ul>
          {
           products.map(a=><li>{a.name}</li>)
          }
          {
            nayoks.map(b=><li>{b}</li>)
          }
        </ul>
        {
            products.map(c=><Products name={c}></Products>)
        }
        {
          salarys.map(s =><Beton name={s}></Beton>)
        }
        <Person nayak="Razzak" naika="Kabari"></Person>
        <Person nayak="Salman Shah" naika="Mousumi"></Person>
        <Person nayak="Elias Kanchan" naika="Diti"></Person>
        
      </header>
    </div>
  );
}
function Count() {
  const [count,setCount]=useState(0);
  return(
    <div>
      <h1>Count:{count}</h1>
      <button onClick={() =>setCount(count-1)}>Decrease</button>
      <button onClick={() =>setCount(count+1)}>Increase</button>
    </div>
  )
}
function Name() {
  const [users,setUsers]=useState([]);
  useEffect(() =>{
    fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(res => res.json())
    .then(data =>setUsers(data));
  },[])
  return(
    <div>
      <h1>Dynamic Users:{users.length}</h1>
      <ul>
        {
          console.log(users)
        }
        {
          users.map(z => <li>{z.name} ({z.phone} {z.email})</li>)
        }
      </ul>
    </div>
  )
}



function Beton(props) {
  var betonStyle={
    backgroundColor:'blue',
    margin:'10px',
    border:'2px solid yellow'
  }
  const {name,salary}=props.name;
  console.log(name,salary);
  return(
    <div style={betonStyle}>
      <h1>{name}</h1>
      <h3>Salary:{salary}</h3>
    </div>
  )
  
}
function Person(props) {
 
  var personStyle={
    backgroundColor:'white',
    fontFamily:'gotham',
    border:'2px solid red',
    margin:'10px', 
    padding:'10px',
    color:'green',
  }
  console.log(props);
  return (
       <div style={personStyle}>
            <h1>Nayak:{props.nayak}</h1>
  <h3>Nayak of {props.naika}</h3>
       </div>
          ) 
}
function Products(props) {
  const productStyle={
    backgroundColor:'white',
    border:'2px solid gray',
    borderRadius:'5px',
    height:'200px',
    width:'200px',
    float:'left',
    color:'red'
  }
  const {name, price}=props.name;
  console.log(name,price);
  return(
    <div style={productStyle}>
      <h3>{name}</h3>
      <h5>{price}</h5>
      <button>Buy Now</button>
    </div>
  )
}


export default App;
