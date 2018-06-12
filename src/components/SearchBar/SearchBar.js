import React, { Component } from 'react'
import './SearchBar.css'
import Package from './Package'
import npmService from '../../services/npms.service'
const enhanceWithClickOutside = require('react-click-outside');

class SearchBar extends Component {

  state = {
    suggestions: [],
    search: ''
  }

  handleClickOutside() {
    this.setState({
      suggestions: [],
      search: ''
    })
  }

  setSuggestions = (e) => {
    if(e.key=='Enter'){
      npmService.getSuggestions(e.target.value)
        .then( res => {
          this.setState({
            suggestions: res.data
          })
      })
    }
  }

  setSearch = (e) => {
    this.setState({
      search: e.target.value
    })
    if(e.target.value==""){
      this.setState({
        suggestions: []
      })
    }
  }


  render() {
    return (
      <div className="search--bar">
            <div className="search--top">
                <div className="search--platform">npm</div>
                <input   value={this.state.search} 
                onKeyDown = {(e) => this.setSuggestions(e)}
                onChange={(e) => this.setSearch(e)} type="text" className="search-input" placeholder="Search Packages"/>
            </div>
            <div className="search--bottom">
                <div className="search--pacakge">
                  {
                    this.state.suggestions.map(sug => <Package pkg={sug.package} />)
                  }
                </div>
            </div>
      </div>
    )
  }
}


export default enhanceWithClickOutside(SearchBar)
