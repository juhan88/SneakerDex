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
    cols: 3,
    cellHeight: 225,
    overflowY: 'auto',
  },
  icon:{
    marginRight: 24,
  }
};


class GridListExampleSimple extends React.Component{
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // This binding is necessary to make `this` work in the callback
    this.onHoverOver = this.onHoverOver.bind(this);
  }
  onHoverOver(){
    return
  }
  render(){
      return <div style={styles.root}  className="sneaker-grid">
          <GridList
            cellHeight={styles.gridList.cellHeight}
            style={styles.gridList}
            cols={styles.gridList.cols}
          >
            <Subheader></Subheader>
            {Sneakers.map((tile) => (

                  <GridTile
                    key={tile.img}
                    title={tile.title}
                    actionIcon={<ActionFlightTakeoff style={styles.icon}/>}
                  >
                    <img src={tile.img} onMouseOver={this.onHoverOver}/>
                  </GridTile>

            ))}
          </GridList>
        </div>
 }
}

export default GridListExampleSimple
