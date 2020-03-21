import React, { Component } from 'react'
import Particles from 'react-particles-js';

export class Home extends Component {
    render() {
        return (
            <>
                <Particles
                    canvasClassName="particle"
                    params={{
                        "particles": {
                            "number": {
                                "value": 200,
                                "density": {
                                    "enable": false
                                }
                            },
                            "color": {
                                "value": "#2e344e"
                            },
                            "size": {
                                "value": 6,
                                "random": true,
                                "anim": {
                                    "speed": 4,
                                    "size_min": 0.3
                                }
                            },
                            "line_linked": {
                                "enable": false
                            },
                            "move": {
                                "random": true,
                                "speed": 1,
                                "direction": "top",
                                "out_mode": "out"
                            },
                            "opacity": {
                                "value": 0.5,
                                "random": false,
                                "anim": {
                                  "enable": false
                                }
                            }
                        },
                        "interactivity": {
                            "modes": {
                                "bubble": {
                                    "distance": 250,
                                    "duration": 2,
                                    "size": 0,
                                    "opacity": 0
                                },
                                "repulse": {
                                    "distance": 400,
                                    "duration": 4
                                }
                            }
                        }
                    }} />

                <div className="home_wrapper">
                    <div className="home_content">
                        <h1 className="home__heading">Hi, I am <span className="highlight">Abhishek Bindra</span></h1>
                        <p className="home__desc">I am a full stack web developer. I can provide clean & optimized code with pixel perfect design. I also make website more & more interactive with web animations.</p>
                        <div className="home__icons">
                            <i className="fab fa-instagram" onClick={() => window.open('https://www.instagram.com/ab.bindra/', '_blank')}></i>
                            <i className="fab fa-github" onClick={() => window.open('https://github.com/Abhi3685', '_blank')}></i>
                            <i className="fab fa-linkedin" onClick={() => window.open('https://www.linkedin.com/in/abhishek-bindra-67b710106/', '_blank')}></i>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
