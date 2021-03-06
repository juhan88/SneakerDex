// import './App.css'

import React from 'react'
import Tile from './Tiles/Tile'
var TileLayout = require('pui-react-tile-layout').TileLayout;
var TileLayoutItem = require('pui-react-tile-layout').TileLayoutItem;
var ClickableAltPanel = require('pui-react-panels').ClickableAltPanel;

import ReactDOM from 'react-dom';ß
import { Navbar, Nav, NavItem } from 'react-bootstrap';



class LandingPage extends React.Component {
  render() {
    return <div className="container-fluid sneakerdex-body">
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

class SneakerDexHeader extends React.Component {
  render(){
    return <nav className="navbar navbar-inverse navbar-fixed-top sneakerdex-nav">
            <ul className="nav navbar-nav">
                <a className="navbar-brand" href="#">SneakerDex</a>
            </ul>
          </nav>
  }
}


class App extends React.Component {
  render() {
    return <div className="App">
      <SneakerDexHeader/>

      <LandingPage name="Air Jordan XI Space Jams"/>
    </div>
  }
}

export default App
