import React, { Component } from 'react'
import './SearchBar.css'
import Package from './Package'

export default class SearchBar extends Component {
  render() {
    return (
      <div className="search--bar">
            <div className="search--top">
                <div className="search--platform">npm</div>
                <input type="text" className="search--input" placeholder="Search Packages"/>
            </div>
            <div className="search--bottom">
                <div className="search--pacakge">
                  <Package />
                </div>
            </div>
      </div>
    )
  }
}
