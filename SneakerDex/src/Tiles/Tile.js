import React from 'react'
import TileTitle from './TileTitle'
import TileImage from './TileImage'
import TileDescription from './TileDescription'
import TilePrice from './TilePrice'
import TileFooter from './TileFooter'

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

export default Tile
