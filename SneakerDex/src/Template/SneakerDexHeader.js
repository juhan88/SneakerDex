import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import React from 'react'

import {deepOrange500, cyan700, grey400} from 'material-ui/styles/colors';

//Colors number from here --> http://www.material-ui.com/#/customization/colors
const customTheme = {
  palette: {
    primary1Color: deepOrange500,
    primary2Color: cyan700,
    primary3Color: grey400
  }
};

const styles = {
  header: {
    color: '#FFFFFF',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  }
}

const SneakerDexHeader = () => (
  <div>
    <MuiThemeProvider muiTheme={getMuiTheme(customTheme)}>
      <AppBar style={styles.header} title="SneakerDex" />
    </MuiThemeProvider>
  </div>
);

export default SneakerDexHeader
