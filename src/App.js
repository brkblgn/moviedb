import React from 'react'
import './App.css'
import Card from './components/Card'
import Nav from './components/Nav'
import Button from './components/Button'
import axios from "axios";

class App extends React.Component{

  state = {
    movies:[]
  }
  componentDidMount(){
    axios.get('http://localhost:3001/movies')
    .then(res => this.setState({movies: res.data}))
  }
 
  render(){
  return (
    
    <div>
      <div className="bgImg"></div>
      <div className="nav"><Nav/></div>

        <div className="layoutrow">
          <div></div>

          
          <div className="main">
            <Button/>
            <Card />
            </div>

          
          <div></div>
          
          
        </div>   
  
    </div>
  );
}
}

export default App;
