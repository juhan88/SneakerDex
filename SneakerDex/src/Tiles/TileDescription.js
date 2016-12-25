import React from 'react'

class TileDescription extends React.Component {
  render() {
    return <TileInfoBlock title="Release Date" value="Decemeber 10th,2016"/>
  }
}

class TileInfoBlock extends React.Component {
  render(){
    return <div className="info-block">
            <div className="info-title">{this.props.title}</div>
            <div className="info-value">{this.props.value}</div>
           </div>
  }
}

export default TileDescription 
