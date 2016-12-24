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

      </div>
    </div>
  }
})

export default App
