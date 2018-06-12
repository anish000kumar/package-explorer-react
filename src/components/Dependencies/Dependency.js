import React, { Component } from 'react'

export default class Dependency extends Component {

  state= {
    editVersion:  false
  }

 parseVersion= (version) => {
  if(version[0]=="^"){
    return <span>{version.substring(1, version.length)} <span style={{opacity:0.5}}> + </span> </span>
  }
  return <span> {version} </span>
 }

 toggleVersionInput = () =>{
   this.setState({
     editVersion: !this.state.editVersion
   })
 }
 onKeyDown = (e) =>{
   if(e.key=='Enter'){
     this.toggleVersionInput()
   }
 }
 


  render() {
    return (
      <div className="dependency">
        <span className="dependency--name"> {this.props.name|| 'react'} </span>
        <div className="dependency--version">
          { this.state.editVersion ?
             <input onKeyDown={this.onKeyDown} type="text" className="version" defaultValue={this.props.version || '16.3.0'} ></input>:
             <span className="version-span" onClick={this.toggleVersionInput}> {this.props.version && this.parseVersion(this.props.version) || '16.3.0'} </span>
          }
          <span className="latest-version"> {this.props.latestVersion || '16.3.1'} </span>
        </div>
        <span className="dependency--close">X</span>
      </div>
    )
  }
}
