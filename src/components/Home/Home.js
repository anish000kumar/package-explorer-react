import React, { Component } from 'react'
import SearchBar from './../SearchBar/SearchBar'
import './Home.css'
import cn from 'classnames';

export default class Home extends Component {

  state = {
    keys: [ 'Info', 'Dependencies', 'Dev Dependencies', 'Scripts', 'Help' ],
    active_key: 'Info'
  }

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
              <ul className='key-list'>
                 {
                   this.state.keys.map(key =>(
                     <li 
                     onClick={() => this.setState({active_key: key})}
                     className={cn("key-list-item", {active: this.state.active_key==key})} > 
                      {key} 
                     </li>
                   ))
                 }
              </ul>
            </div>
            <div className="container">
            </div>
          </div>
      </div>
    )
  }
}
