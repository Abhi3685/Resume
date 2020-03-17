import React, { Component } from 'react'
import ModalVideo from 'react-modal-video'

export class Portfolio extends Component {
    render() {
        return (
            <div className="section_wrapper container">
                <div className="section_heading">
                    <h1>Portfolio</h1>
                    <span>Portfolio</span>
                </div>

                <ModalVideo channel='youtube' isOpen={true} videoId='L61p2uyiMSo' onClose={() => this.setState({isOpen: false})} />

                <div className="portfolio_content">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="item_wrapper">
                                <div className="item_img_wrapper">
                                    <img width="100%" src="/p1.png" alt="" />
                                    <ul>
                                        <li><i className="fa fa-search-plus"></i></li>
                                        <li><a rel="noopener noreferrer" target="_blank" href="https://workcollab.herokuapp.com/"><i className="fas fa-link"></i></a></li>
                                    </ul>
                                </div>
                                <h5><span>WorkCollab</span></h5>
                                <h6>Project Management App</h6>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="item_wrapper">
                                <div className="item_img_wrapper">
                                    <img width="100%" src="/p2.png" alt="" />
                                    <ul>
                                        <li><i className="fa fa-search-plus"></i></li>
                                        <li><a rel="noopener noreferrer" target="_blank" href="http://bloggie.cf/"><i className="fas fa-link"></i></a></li>
                                    </ul>
                                </div>
                                <h5><span>Blogie</span></h5>
                                <h6>Blogging Platform</h6>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="item_wrapper">
                                <div className="item_img_wrapper">
                                    <img width="100%" src="/p3.png" alt="" />
                                    <ul>
                                        <li><i className="fa fa-search-plus"></i></li>
                                        <li><a rel="noopener noreferrer" target="_blank" href="http://privatechat.glitch.me/"><i className="fas fa-link"></i></a></li>
                                    </ul>
                                </div>
                                <h5><span>Private Chat</span></h5>
                                <h6>Chatting App</h6>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="item_wrapper">
                                <div className="item_img_wrapper">
                                    <img width="100%" src="/p4.png" alt="" />
                                    <ul>
                                        <li><i className="fa fa-search-plus"></i></li>
                                    </ul>
                                </div>
                                <h5><span>Skodun</span></h5>
                                <h6>Inspection Auditor Platform</h6>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="item_wrapper">
                                <div className="item_img_wrapper">
                                    <img width="100%" src="/p5.png" alt="" />
                                    <ul>
                                        <li><i className="fa fa-search-plus"></i></li>
                                        <li><a rel="noopener noreferrer" target="_blank" href="http://beaumir.com/"><i className="fas fa-link"></i></a></li>
                                    </ul>
                                </div>
                                <h5><span>Beaumir</span></h5>
                                <h6>IOT Based Smart Mirrors</h6>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="item_wrapper">
                                <div className="item_img_wrapper">
                                    <img width="100%" src="/p6.png" alt="" />
                                    <ul>
                                        <li><i className="fa fa-search-plus"></i></li>
                                    </ul>
                                </div>
                                <h5><span>Weblelo</span></h5>
                                <h6>Website Builder</h6>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="item_wrapper">
                                <div className="item_img_wrapper">
                                    <img width="100%" src="/p7.png" alt="" />
                                    <ul>
                                        <li><i className="fa fa-search-plus"></i></li>
                                        <li><a rel="noopener noreferrer" target="_blank" href="https://abhi3685.github.io/Quiz-Game/quiz.html"><i className="fas fa-link"></i></a></li>
                                    </ul>
                                </div>
                                <h5><span>RapidFire</span></h5>
                                <h6>Quiz Game</h6>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="item_wrapper">
                                <div className="item_img_wrapper">
                                    <img width="100%" src="/p8.png" alt="" />
                                    <ul>
                                        <li><i className="fa fa-search-plus"></i></li>
                                        <li><a rel="noopener noreferrer" target="_blank" href="http://cukape.netlify.com/"><i className="fas fa-link"></i></a></li>
                                    </ul>
                                </div>
                                <h5><span>Cukape</span></h5>
                                <h6>Simple Cart Application</h6>
                            </div>
                        </div>
                    </div>
                </div>
                <br/><br/>
            </div>
        )
    }
}
