
import './App.css';
import Header from './components/header';
import Maincontent from './components/maincontent';
import React, {useState, useEffect} from 'react';
function App() {

  const [message, setMessage] = useState("");

  useEffect(() =>{
    fetch("http://localhost:8000/message")
    .then((res)=>res.json())
    .then((data) =>setMessage(data.message));
  }, []);
  return (
    <div className="container">
       <h1>{message}</h1>
       <Header />  
       <Maincontent />
       
    </div>
  );
}

export default App;
