import React from 'react'
import ActionFlightTakeoff from 'material-ui/svg-icons/action/flight-takeoff';
import {red500, yellow500, blue500} from 'material-ui/styles/colors';

import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import Sneakers from '../../data/Sneakers'

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    padding: '20px'
  },
  gridList: {
    cellHeight: 225,
    overflowY: 'auto',
  },
  icon:{
    marginRight: 24,
  }
};


const GridListExampleSimple = () => (
  <div style={styles.root} className="sneaker-grid">
    <GridList
      cellHeight={styles.gridList.cellHeight}
      style={styles.gridList}
    >
      <Subheader></Subheader>
      {Sneakers.map((tile) => (
        <GridTile
          key={tile.img}
          title={tile.title}
          actionIcon={<ActionFlightTakeoff style={styles.icon}  />}
        >
          <img src={tile.img} />
        </GridTile>
      ))}
    </GridList>
  </div>
);

export default GridListExampleSimple
