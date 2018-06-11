import React from 'react'
import './Package.css'
export default function Package(props){
  return (
    <div className="package--data">
        <div className="package--body">
            <h3 className="package--name"> {props.name || 'Package Name'} <small> {props.version || '0.0.0'} </small> </h3>
            <p className="package--description"> {props.description || 'The following example first defines a global custom property named "--main-bg-color", then it uses the var() function to insert the value of the custom property later in the style shee  ' }</p>
            <p className="package--update"> {props.update || 'Last updated'} </p>
        </div>
        <div className="package--controls">
            <button className="mar-10"> save </button>
            <button className="mar-10"> save-dev </button>
        </div>
    </div>
  )
}
