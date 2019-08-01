import React, { Component } from 'react';
import Speaker from './speaker';

class Speakers extends Component {
    state = { 
        loading: true,
        persons: null
     };


     async componentDidMount(){
         const url = "https://dashboard.riseupsummit.com/api/speakers";
         const response = await fetch(url);
         const data = await response.json();
    
         this.setState({persons: data.speekers.slice(11,28) , loading: false});

     }
    render() { 
        return ( 
            <React.Fragment>
                <h1 className="speaker-heading"> Meet the Speakers</h1>
                {this.state.loading || !this.state.persons ? 
                    (<div><h1>Loading..</h1></div>)
                    : (<div className="card-wrapper">{
                        this.state.persons.map(speaker =>
                            <Speaker 
                            speakerURL = {speaker.imgUrl} 
                            speakerName = {speaker.name} 
                            speakerRole = {speaker.job_title} /> ) 
                    }</div>)        
            } 
            
            </React.Fragment>
            
         );
    }
}
 
export default Speakers;