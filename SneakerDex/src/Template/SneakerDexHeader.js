import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import React from 'react'

const SneakerDexHeader = () => (
  <div className="sneaker-nav">
  <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
    <AppBar title="SneakerDex" />
  </MuiThemeProvider>
  </div>
);

export default SneakerDexHeader
