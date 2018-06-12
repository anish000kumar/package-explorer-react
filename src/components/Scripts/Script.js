import React, { Component } from 'react'

export default class ListItem extends Component {
  render() {
      const item = this.props.item;
    return (
      <div className="command--component">
            <div className="command-left">
                <span className="caret-right">></span>
                <span className="command-name">{this.props.item && this.props.item.key}</span>
            </div>
            <span className="command-value">{this.props.item && this.props.item.value}</span>
      </div>
    )
  }
}
