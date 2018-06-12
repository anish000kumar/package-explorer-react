import React, { Component } from 'react'

export default class Dependency extends Component {


  render() {
    return (
      <div className="dependency">
        <span className="dependency--name"> {this.props.name|| 'react'} </span>
        <div className="dependency--version">
          <input type="text" className="version" defaultValue={this.props.version || '16.3.0'} ></input>
          <span className="latest-version"> {this.props.latestVersion || '16.3.1'} </span>
        </div>
        <span className="dependency--close">X</span>
      </div>
    )
  }
}
