// import './App.css'

import React from 'react'

class LandingPage extends React.Component {
  render() {
    return <div className="container">
            <div className="row">
              <div className="col-md-3 portfolio-item">
                      <img className="img-responsive" src="http://placehold.it/750x450" alt=""/>
              </div>
              <div className="col-md-3 portfolio-item">
                      <img className="img-responsive" src="http://placehold.it/750x450" alt=""/>
              </div>
              <div className="col-md-3 portfolio-item">
                    <img className="img-responsive" src="http://placehold.it/750x450" alt=""/>
              </div>
              <div className="col-md-3 portfolio-item">
                      <img className="img-responsive" src="http://placehold.it/750x450" alt=""/>
              </div>
            </div>


          </div>




  }
}

class Tile extends React.Component {
  render() {
    return <div>
            <TileTitle name = {this.props.name}></TileTitle>
            <TileImage/>
            <TileDescription/>
            <TileFooter/>
          </div>
  }
}

class TileTitle extends React.Component {
  render() {
    return <h1>{this.props.name}</h1>
  }
}

class TileImage extends React.Component {
  render() {
    return <img src ="/images/space-jam.jpg"/>
  }
}

class TileDescription extends React.Component {
  render() {
    return <h3>Initial Release December 5th, 2016</h3>;
  }
}

class TileFooter extends React.Component {
  render() {
    return <p>All rights reserved</p>
  }
}

let App = React.createClass({
  render() {
    return <div className="App">
      <div className="App-heading App-flex">
        <h2>Welcome to <span className="App-react">SneakerDex</span></h2>
      </div>
      <div className="App-instructions App-flex">
      <LandingPage/>
        <Tile name="Air Jordan 11 Space Jam"></Tile>
      </div>
    </div>
  }
})

export default App
