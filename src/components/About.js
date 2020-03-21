import React, { Component } from 'react'

export class About extends Component {
    getAge(d1, d2){
        d2 = new Date();
        var diff = d2.getTime() - d1.getTime();
        return Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
    }

    render() {
        return (
            <div className="section_wrapper container">
                <div className="section_heading">
                    <h1>About Me</h1>
                    <span>About Me</span>
                </div>
                <div className="about_content">
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
                            <p><b>Age</b> {this.getAge(new Date(2000, 1, 14))} Years</p>
                            <p><b>Nationality</b> Indian</p>
                            <p><b>Languages</b> English, Hindi</p>
                            <p><b>Address</b> Pocket B6, Sector 3, Rohini, Delhi-85</p>
                            <p><b>Freelance</b> Available</p>
                            <br/>
                            <a download href="/Abhishek-Resume.pdf" className="d-none downloadLink">Resume Download Link</a>
                            <button className="btn custom_btn" onClick={() => document.getElementsByClassName('downloadLink')[0].click()}>DOWNLOAD CV</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
