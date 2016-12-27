import React from 'react';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import Tile from './Tiles/Tile'
import Toggle from 'material-ui/Toggle';
const SneakerDexHeader = () => (
  <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
    <AppBar title="SneakerDex" />

  </MuiThemeProvider>
);

const styles = {
  block: {
    maxWidth: 250,
  },
  toggle: {
    marginBottom: 16,
  },
  thumbOff: {
    backgroundColor: '#ffcccc',
  },
  trackOff: {
    backgroundColor: '#ff9d9d',
  },
  thumbSwitched: {
    backgroundColor: 'red',
  },
  trackSwitched: {
    backgroundColor: '#ff9d9d',
  },
  labelStyle: {
    color: 'red',
  },
};




class App extends React.Component {
  render() {
    return <div className="App">
        <SneakerDexHeader/>
        <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <div style={styles.block}>
          <Toggle
           label="Simple"
           style={styles.toggle}
          />
          </div>
        </MuiThemeProvider>
        <Tile name={this.props.name}/>
      </div>
  }
}

export default App
