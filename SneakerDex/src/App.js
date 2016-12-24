// import './App.css'

import React from 'react'
var TileLayout = require('pui-react-tile-layout').TileLayout;
var TileLayoutItem = require('pui-react-tile-layout').TileLayoutItem;
var ClickableAltPanel = require('pui-react-panels').ClickableAltPanel;

class LandingPage extends React.Component {
  render() {

    return <div className="container-fluid">
              <TileLayout columns={3}>
                <TileLayoutItem>
                  <ClickableAltPanel><Tile name={this.props.name}/></ClickableAltPanel>
                </TileLayoutItem>
                <TileLayoutItem>
                  <ClickableAltPanel><Tile name={this.props.name}/></ClickableAltPanel>
                </TileLayoutItem>
                <TileLayoutItem>
                  <ClickableAltPanel><Tile name={this.props.name}/></ClickableAltPanel>
                </TileLayoutItem>
                <TileLayoutItem>
                  <ClickableAltPanel><Tile name={this.props.name}/></ClickableAltPanel>
                </TileLayoutItem>
                <TileLayoutItem>
                  <ClickableAltPanel><Tile name={this.props.name}/></ClickableAltPanel>
                </TileLayoutItem>
                <TileLayoutItem>
                  <ClickableAltPanel><Tile name={this.props.name}/></ClickableAltPanel>
                </TileLayoutItem>
              </TileLayout>
          </div>
  }
}

class Tile extends React.Component {
  render() {
    return <div>
            <TileTitle name={this.props.name}></TileTitle>
            <TileImage/>
            <TileDescription/>
            <TilePrice/>
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
    return <p>"The Air Jordan 11 Retro "Space Jam" returns for the holiday season as part of Jordan Brand's annual Christmas Air Jordan 11 release and the brand's celebration of the 20th anniversary of the Space Jam movie. The sneaker features a cut and colorway that more closely resembles the original Michael Jordan "Space Jam" film PE and features a black nylon and patent leather upper with dark concord accents. Release date is Dec. 10, 2016 at a retail price of $220."</p>;
  }
}

class TileFooter extends React.Component {
  render() {
    return <p>All rights reserved</p>
  }
}

class TilePrice extends React.Component {
  render(){
    return <p>$220</p>
  }
}

class SneakerDexHeader extends React.Component {
  render(){
    return <nav className="navbar navbar-inverse">
            <div className="container-fluid">
              <div className="navbar-header">
                <a className="navbar-brand" href="#">WebSiteName</a>
              </div>
              <ul className="nav navbar-nav">
                <li><a href="#">Home</a></li>
                <li><a href="#">Link</a></li>
                <li><a href="#">Link</a></li>
              </ul>
            </div>
          </nav>
  }
}

let App = React.createClass({
  render() {
    return <div className="App">
      <SneakerDexHeader/>
      <LandingPage name="Air Jordan XI Space Jams"/>
    </div>
  }
})

export default App
