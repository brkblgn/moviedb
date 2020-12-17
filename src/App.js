import React from 'react'
import './App.css'
import Card from './components/Card'
import Nav from './components/Nav'
import Button from './components/Button'

class App extends React.Component{
 
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
