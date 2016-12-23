import './App.css'

import React from 'react'



class Tile extends React.Component {
  render() {
    return <div>
          <h1>{this.props.name}</h1>
            <TileImage/>
            <TileDescription/>
          </div>
  }
}

class TileImage extends React.Component {
  render() {
    return <img src="public/img/nike-air-jordan-11-space-jam.jpg" />
  }
}

class TileDescription extends React.Component {
  render() {
    return <h3>Initial Release Decemeber 5th, 2016</h3>;
  }
}

let App = React.createClass({
  render() {
    return <div className="App">
      <div className="App-heading App-flex">
        <h2>Welcome to <span className="App-react">SneakerDex</span></h2>
      </div>
      <div className="App-instructions App-flex">
        <Tile name="Air Jordan 11 Space Jam"></Tile>
      </div>
    </div>
  }
})

export default App
