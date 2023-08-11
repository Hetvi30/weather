import React, { Component } from 'react'
import Header from './Components/Header'
import Home from './Components/Home'
import Weather from './Components/Weather'
import {BrowserRouter as Router,Routes, Switch , Route } from 'react-router-dom'

export class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <Header></Header>
        <Routes>
          <Route path='/weather' element={<Weather/>}></Route>
          <Route path='/' element={<Home></Home>}></Route>  
        </Routes>
      </div>
      </Router>
    )
  }
}

export default App