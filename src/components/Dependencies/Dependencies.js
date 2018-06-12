import React, { Component } from 'react'
import Dependency from './Dependency'
import './Dependencies.css'

export default class Dependencies extends Component {
  render() {
    debugger
    return (
      <div className="dependencies">
         <input type="text" className="search-input" accessKey="d" placeholder="Search (cmd+f)" style={{width: '100%'}}/>
         <div className="dependencies-list">
            { this.props.dependencies?
              this.props.dependencies.map(dep => <Dependency /> ):
              'No depepndencies'
            }
         </div>
      </div>
    )
  }
}
