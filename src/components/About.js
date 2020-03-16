import React, { Component } from 'react'

export class About extends Component {
    render() {
        return (
            <div className="section_wrapper container">
                <div className="section_heading">
                    <h1>About Me</h1>
                    <span>About Me</span>
                </div>
                <div className="section_content">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="about_img_wrapper">
                                <img width="100%" height="440" src="/about_img.jpg" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <h3>I am <span className="highlight">Abhishek Bindra</span></h3>
                            <p>I am a full stack web developer. I can provide clean & optimized code with pixel perfect design. I also make website more & more interactive with web animations.</p>
                            <br/>
                            <p><b>Full Name</b> Abhishek Bindra</p>
                            <p><b>Age</b> 20 Years</p>
                            <p><b>Nationality</b> Indian</p>
                            <p><b>Languages</b> English, Hindi</p>
                            <p><b>Address</b> Pocket B6, Sector 3, Rohini, Delhi-85</p>
                            <p><b>Freelance</b> Available</p>
                            <br/>
                            <button className="btn custom_btn">DOWNLOAD CV</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
