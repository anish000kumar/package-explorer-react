import React, { Component } from 'react';
import SearchBar from './../SearchBar/SearchBar'
import './PackageDetail.css'


const LeftAngle = () => (
<div>
    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="#fff" width="30" height="65"  preserveAspectRatio="xMidYMid meet" viewBox="0 0 608 1280"><path d="M595 288q0 13-10 23L192 704l393 393q10 10 10 23t-10 23l-50 50q-10 10-23 10t-23-10L23 727q-10-10-10-23t10-23l466-466q10-10 23-10t23 10l50 50q10 10 10 23z" fill="#fff"/></svg>
</div>
)
class PackageDetail extends Component {
    render() {
        const pkg = this.props.pkg;
        return (
            <div className="package-detail">
                { pkg ? 
                <div className="package-inner-container">
                    <div className="home--header">
                        <div className="left">
                            <div className="project-icon"></div>
                            <div className="project-data" style={{display: 'flex'}}>
                                <div className='back-btn' onClick=""><LeftAngle/></div>
                                <div className="project-detail">
                                    <h3>{pkg && pkg.name}
                                        <span style={{fontSize: '14px', paddingLeft: '5px'}}>({pkg && pkg.version})</span>
                                    </h3>
                                    <div className="project-description">{pkg && pkg.description}</div>
                                </div>
                            </div>
                        </div>
                        <div className="right pkg-detail-right">
                            <div className="stats">
                                <span className='count'>1500</span>
                                <span className='txt'>Downloads</span>
                                <img src={require('../../assets/download.svg')}/>
                            </div>
                            <div className="stats">
                                <span className='count'>1500</span>
                                <span className='txt'>stars</span>
                                <img src={require('../../assets/star.svg')}/>
                            </div>
                            <div className="stats">
                                <span className='count'>1500</span>
                                <span className='txt'>Forks</span>
                                <img src={require('../../assets/download.svg')}/>
                            </div>
                            <div className="stats">
                                <span className='count'>1500</span>
                                <span className='txt'>Open Issues</span>
                                <img src={require('../../assets/download.svg')}/>
                            </div>
                        </div>
                    </div>
                    <div className="home--body">
                        <div className="sidebar menu-sidebar">
                            <div className="sidebar-inner">
                                <div className="tags-container">
                                    <div className="tag-b">-save</div>
                                    <div className="tag-b">-save-dev</div>
                                </div>
                                <div className="links-container">
                                    <h5>Links:</h5>
                                    <ul>
                                        <li>Bugs: <a href={pkg.links.bugs} target="_blank">
                                                <span>{pkg && pkg.links.bugs || '---'}</span>
                                            </a>
                                        </li>
                                        <li>HomePage: <a href={pkg.links.homepage} target="_blank">
                                                <span>{pkg && pkg.links.homepage || '---'}</span>
                                            </a>
                                        </li>
                                        <li>NPM: <a href={pkg.links.npm} target="_blank">
                                                <span>{pkg && pkg.links.npm || '---'}</span>
                                            </a>
                                        </li>
                                        <li>Repo: <a href={pkg.links.repository} target="_blank">
                                                <span>{pkg && pkg.links.repository || '---'}</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            
                        </div>
                        <div className="container main-container">
                            <div className="main-content">
                                <p>
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet totam iusto unde possimus dolore autem iste.
                                    Unde ullam aspernatur excepturi cum? Voluptas similique corporis eos autem aliquid vitae possimus doloribus?
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet totam iusto unde possimus dolore autem iste.
                                    Unde ullam aspernatur excepturi cum? Voluptas similique corporis eos autem aliquid vitae possimus doloribus?
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet totam iusto unde possimus dolore autem iste.
                                    Unde ullam aspernatur excepturi cum? Voluptas similique corporis eos autem aliquid vitae possimus doloribus?
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet totam iusto unde possimus dolore autem iste.
                                    Unde ullam aspernatur excepturi cum? Voluptas similique corporis eos autem aliquid vitae possimus doloribus?
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet totam iusto unde possimus dolore autem iste.
                                    Unde ullam aspernatur excepturi cum? Voluptas similique corporis eos autem aliquid vitae possimus doloribus?
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet totam iusto unde possimus dolore autem iste.
                                    Unde ullam aspernatur excepturi cum? Voluptas similique corporis eos autem aliquid vitae possimus doloribus?
                                </p>
                                <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet totam iusto unde possimus dolore autem iste.
                                Unde ullam aspernatur excepturi cum? Voluptas similique corporis eos autem aliquid vitae possimus doloribus?
                                </p>
                                
                                <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet totam iusto unde possimus dolore autem iste.
                                Unde ullam aspernatur excepturi cum? Voluptas similique corporis eos autem aliquid vitae possimus doloribus?
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet totam iusto unde possimus dolore autem iste.
                                Unde ullam aspernatur excepturi cum? Voluptas similique corporis eos autem aliquid vitae possimus doloribus?
                                </p>
                                
                                <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet totam iusto unde possimus dolore autem iste.
                                Unde ullam aspernatur excepturi cum? Voluptas similique corporis eos autem aliquid vitae possimus doloribus?
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet totam iusto unde possimus dolore autem iste.
                                Unde ullam aspernatur excepturi cum? Voluptas similique corporis eos autem aliquid vitae possimus doloribus?
                                </p>
                                <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet totam iusto unde possimus dolore autem iste.
                                Unde ullam aspernatur excepturi cum? Voluptas similique corporis eos autem aliquid vitae possimus doloribus?
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet totam iusto unde possimus dolore autem iste.
                                Unde ullam aspernatur excepturi cum? Voluptas similique corporis eos autem aliquid vitae possimus doloribus?
                                </p>
                            </div>
                        </div>
                    </div> 
                </div>: ''
                }
            </div>
        );
    }
}

export default PackageDetail;