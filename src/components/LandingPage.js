import React, { Component } from 'react'
import '../assets/css/landing.css'
// const { dialog, BrowserWindow } = require('electron')
import DoneIcon from '@material-ui/icons/Done';


class LandingPage extends Component{
    constructor(props){
        super(props);

        this.state = {
            urlPDFBoolean: false,
            urlPDFPath: false,
            localPDFBoolean: '',
            localPDFPath: '',
        }
    }

    
    openDirectory = () => {
        var fileName = document.getElementById("file").files[0].path
        console.log(fileName)
    }

    onUpload = () => {
        // Do routing stuff here
        if (this.state.urlPDFBoolean || this.state.localPDFBoolean){
            return (
                <div className="fullWidth">
                    <DoneIcon id="checkMark"/>
                </div>
            )
        }
        
    }

    updateStateURL = () => {
        var urlLink = document.getElementById( "url" ).files[0].path

        this.setState({urlPDFPath: urlLink})
        this.setState({urlPDFBoolean: true})
        
    }

    updateStateLocal = () => {
        var localPath = document.getElementById( "file").files[0].path

        this.setState({localPDFPath: localPath})
        this.setState({localPDFBoolean: true})
    }

    fileNameOrDefault = () => {
        if ( this.state.localPDFBoolean){
            var localName = document.getElementById( "file").files[0].name
            return localName;
        }
        else{
            return <p>Locate a PDF</p>
        }
        
        
    }

    render(){
        return(
            <div id="container">
                
                <div id="secondContainer">
                <h1 className="heading">Fockus</h1>
                <h2>Read Without Distractions</h2>

                <div id="twoButtons">

                    <div className="startReading" >
                        <input type="file" name="file" id="file" className="inputfile" onChange={this.updateStateLocal}/>
                        <label for="file"> {this.fileNameOrDefault()} </label>
                    </div>

                    <p>OR</p>

                    <div className="openURL" onClick={this.updateStateURL}>
                        <input className="calltoactionURL" type="url" name="url" id="url"  placeholder="Enter a URL" />
                    </div>

                </div>
                {this.onUpload()}
                </div>
                
            </div>
        )
    }
}

export default LandingPage;