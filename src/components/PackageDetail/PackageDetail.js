import React, { Component } from 'react';
import SearchBar from './../SearchBar/SearchBar'
import './PackageDetail.css'

class PackageDetail extends Component {
    render() {
        return (
            <div className="package-detail">
                <div className="home--header">
                    <div className="left">
                        <div className="project-icon"></div>
                        <div className="project-data">
                            <h3>Hello World</h3>
                        </div>
                    </div>
                    <div className="right">
                        <SearchBar />
                    </div>
                </div>
            </div>
        );
    }
}

export default PackageDetail;