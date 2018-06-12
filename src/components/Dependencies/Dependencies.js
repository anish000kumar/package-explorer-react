import React, { Component } from 'react'
import './Dependencies.css'

export default class Dependencies extends Component {
  render() {
    return (
      <div className="dependencies">
         <input type="text" className="search-input" placeholder="Search (cmd+f)" style={{width: '100%'}}/>
         <div className="dependencies-list">
            
         </div>
      </div>
    )
  }
}
