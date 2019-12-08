import React from 'react'
import { Link } from 'react-router'

class BlanusHome extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            date: new Date().toLocaleString().toLowerCase()
            
        }
    }
    setTime() {
        this.setState({ date: new Date().toLocaleString().toLowerCase() })
    }
    componentDidMount() {
         window.setInterval(function () {
            this.setTime();
            }.bind(this), 1000);
    }

    render() {

        return (
            <div style={{ backgroundImage: 'url(' + 'images/home_bg.jpg' + ')' }}>
                <div className='container container-fluid'>
                    <div className='span9 centred' style={{ color: 'white', textAlign: 'center' }}>
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <pre style={{ color: 'white', background: 'transparent', whiteSpace: 'pre'}}>
 _______  __      ________  ___   __   __  __  ______{"\n"}    
/_______/\/_/\    /_______/\/__/\ /__/\/_/\/_/\/_____/\{"\n"}     
   \::: _  \ \:\ \   \::: _  \ \::\_\\  \ \:\ \:\ \::::_\/_{"\n"}    
 \::(_)  \/\:\ \   \::(_)  \ \:. `-\  \ \:\ \:\ \:\/___/\{"\n"}   
  \::  _  \ \:\ \___\:: __  \ \:. _    \ \:\ \:\ \_::._\:\{"\n"}  
   \::(_)  \ \:\/___/\:.\ \  \ \. \`-\  \ \:\_\:\ \/____\:\{"\n"} 
    \_______\/\_____\/\__\/\__\/\__\/ \__\/\_____\/\_____\/{"\n"}
                        </pre>
                        
                        <p>{this.state.date} YVR</p>
                        <br />
                        <br />
                        <br />
                        <Link to='/' style={{ color: 'white' }}>news</Link>
                        <br />
                        <Link to='/' style={{ color: 'white' }}>shop</Link>
                        <br />
                        <Link to='/' style={{ color: 'white' }}>random</Link>
                        <br />
                        <Link to='/' style={{ color: 'white' }}>about</Link>
                        <br />
                        <Link to='/' style={{ color: 'white' }}>contact</Link>
                        <br />
                        <Link to='/' style={{ color: 'white' }}>mailing list</Link>
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />

                    </div>
                </div>
            </div>
        )
    }
}

export default BlanusHome