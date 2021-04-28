// Code DigitalClicker Component Here
import React from 'react';

class YouTubeDebugger extends React.Component {
    constructor(){
    super();
    
    this.state ={
            errors: [],
            user: null,
            settings: {
              bitrate: 8,
              video: {
                resolution: '1080p'
              }
            }
        }  
    }

    handleClick = () => {
        this.setState({
            settings:{
            ...this.state.settings,    
            bitrate: 12  
            }
    })
    }
    resClick = () =>{
        this.setState({
            settings:{
            ...this.state.settings,
            video: {
                
                resolution: '720p'
            }
        }
        })
    }
    render(){
        return(
            <div>
            <button className="bitrate"onClick={this.handleClick}>bitrate</button>
             <button className="resolution" onClick={this.resClick}>resolution</button>
            </div>
        )  
        }
}

export default YouTubeDebugger;