import React, { Component } from 'react'
import SearchBar from './../SearchBar/SearchBar'
import './Home.css'

export default class Home extends Component {
  render() {
    return (
      <div className="explorer-home">
          <div className="home--header">
            <div className="left">
                <div className="project-icon"></div>
                <div className="project-data">
                  <h3>Hello World</h3>
                  <p>https://github.com/anish000kumar/he.git</p>
                </div>
            </div>
            <div className="right">
              <SearchBar />
            </div>
          </div>

          <div className="home--body">
            <div className="sidebar">
            </div>
            <div className="container">
            </div>
          </div>
      </div>
    )
  }
}
