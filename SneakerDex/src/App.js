import React from 'react';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Tile from './Tiles/Tile'
import SneakerDexHeader from './Template/SneakerDexHeader'
import GridListExampleSimple from './Template/SneakerGrid'

class App extends React.Component {
  render() {
    return <div className="App">
        <SneakerDexHeader/>
          <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
          <GridListExampleSimple/>
        </MuiThemeProvider>
      </div>
  }
}

export default App
