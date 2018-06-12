import React, { Component } from 'react';
import SearchBar from './../SearchBar/SearchBar'
import './PackageDetail.css'

class PackageDetail extends Component {
    render() {
        const pkg = this.props.pkg;
        return (
            <div className="package-detail">
                <div className="home--header">
                    <div className="left">
                        <div className="project-icon"></div>
                        <div className="project-data" style={{display: 'flex'}}>
                            <div className='back-btn' onClick="">&#60;</div>
                            <div className="project-detail">
                                <h3>{pkg && pkg.name}
                                    <span style={{fontSize: '14px', paddingLeft: '5px'}}>({pkg && pkg.version})</span>
                                </h3>
                                <div className="project-description">{pkg && pkg.description}</div>
                            </div>
                        </div>
                    </div>
                    <div className="right">
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
            </div>
        );
    }
}

export default PackageDetail;