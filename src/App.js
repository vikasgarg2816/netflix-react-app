import { VideocamOutlined } from '@material-ui/icons'
import React, { Component } from 'react'
import Banner from './Banner'
import Navbar from './Navbar'
import Slider from './Slider'



export class App extends Component {
  render() {
    return (
      <div className="app">
        <Navbar/>
        <Banner/>
        <Slider/>
      
      </div>
    )
  }
}

export default App
