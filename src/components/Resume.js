import React, { Component } from 'react'
import Progress from 'react-progressbar'

export class Resume extends Component {
    constructor(props) {
        super(props);

        this.state = {
            html: '0',
            css: '0',
            js: '0',
            php: '0',
            node: '0',
            angular: '0',
            react: '0',
            wordpress: '0'
        };
    }

    componentDidMount() {
        var that = this;
        setTimeout(function() {
            that.setState({
                html: '95',
                css: '85',
                js: '85',
                php: '90',
                node: '90',
                angular: '80',
                react: '75',
                wordpress: '80'
            });
        }, 100);
    }

    render() {
        return (
            <div className="section_wrapper container">
                <div className="section_heading">
                    <h1>My Skills</h1>
                    <span>My Skills</span>
                </div>
                <div className="skill_content">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="skill_wrapper">
                                <p className="skill_name">HTML</p>
                                <div className="skill_value">
                                    <p>{this.state.html}%</p>
                                    <Progress completed={this.state.html} />
                                </div>
                            </div>
                            <div className="skill_wrapper">
                                <p className="skill_name">JavaScript</p>
                                <div className="skill_value">
                                    <p>{this.state.js}%</p>
                                    <Progress completed={this.state.js} />
                                </div>
                            </div>
                            <div className="skill_wrapper">
                                <p className="skill_name">Node JS</p>
                                <div className="skill_value">
                                    <p>{this.state.node}%</p>
                                    <Progress completed={this.state.node} />
                                </div>
                            </div>
                            <div className="skill_wrapper">
                                <p className="skill_name">React JS</p>
                                <div className="skill_value">
                                    <p>{this.state.react}%</p>
                                    <Progress completed={this.state.react} />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="skill_wrapper">
                                <p className="skill_name">CSS</p>
                                <div className="skill_value">
                                    <p>{this.state.css}%</p>
                                    <Progress completed={this.state.css} />
                                </div>
                            </div>
                            <div className="skill_wrapper">
                                <p className="skill_name">PHP</p>
                                <div className="skill_value">
                                    <p>{this.state.php}%</p>
                                    <Progress completed={this.state.php} />
                                </div>
                            </div>
                            <div className="skill_wrapper">
                                <p className="skill_name">Angular</p>
                                <div className="skill_value">
                                    <p>{this.state.angular}%</p>
                                    <Progress completed={this.state.angular} />
                                </div>
                            </div>
                            <div className="skill_wrapper">
                                <p className="skill_name">WordPress</p>
                                <div className="skill_value">
                                    <p>{this.state.wordpress}%</p>
                                    <Progress completed={this.state.wordpress} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            
                <br/><br/>

                <div className="section_heading">
                    <h1>Resume</h1>
                    <span>Resume</span>
                </div>
                <div className="working_wrapper">
                    <h3><i className="fas fa-briefcase"></i>Working Experience</h3>
                    <br/>
                    <div className="working_content">
                        <div className="work_summary">
                            <h6>Oct 2019 - Jan 2020</h6>
                        </div>
                        <div className="work_detail">
                            <h4 className="highlight">Software Developer</h4>
                            <h5>Skodun</h5>
                            <p>
                                A smart web based platform where all paper checklists can be made paperless with the benefits and additional features built into the platform.
                                It lets auditor conduct hassle free audits with automated report generation facility along with analytics that helps track business progress.
                            </p>
                        </div>
                    </div>
                    <div className="working_content">
                        <div className="work_summary">
                            <h6>Jun 2019 - July 2019</h6>
                        </div>
                        <div className="work_detail">
                            <h4 className="highlight">Full Stack Web Developer</h4>
                            <h5>Beaumir</h5>
                            <p>
                                Introduced IOT based smart mirrors which can engage with Cosmetics industry in delivering rich content and information with an experience which is guaranteed to engage both the consumer as well as the provider.
                                Beaumir smarttech mirrors displays greetings, news, quotes, offers and interactive videos for the engagement of consumers along with elite experience.
                            </p>
                        </div>
                    </div>
                    <div className="working_content">
                        <div className="work_summary">
                            <h6>Jun 2018 - Aug 2018</h6>
                        </div>
                        <div className="work_detail">
                            <h4 className="highlight">Full Stack Web Developer</h4>
                            <h5>IdealVillage</h5>
                            <p>
                                As we are transforming India towards being digital, villages should be equally aligned in the process. 
                                We managed to create software products like website builder, job portal and ecommerce like platforms with dead simple learning usage that enables villagers learn and adapt themselves to digital era.
                            </p>
                        </div>
                    </div>
                </div>

                <br/><br/>
                
                <div className="education_wrapper">
                    <h3><i className="fas fa-user-graduate"></i>Educational Qualifications</h3>
                    <br/>
                    <div className="working_content">
                        <div className="work_summary">
                            <h6>2017 - 2021</h6>
                        </div>
                        <div className="work_detail">
                            <h4 className="highlight">Bachelor of Technology <span>(Computer Science Engineering)</span></h4>
                            <h5>IP University</h5>
                        </div>
                    </div>
                    <div className="working_content">
                        <div className="work_summary">
                            <h6>2015 - 2017</h6>
                        </div>
                        <div className="work_detail">
                            <h4 className="highlight">Senior Secondary School</h4>
                            <h5>Mount Abu Public School</h5>
                        </div>
                    </div>
                    <div className="working_content">
                        <div className="work_summary">
                            <h6>2015</h6>
                        </div>
                        <div className="work_detail">
                            <h4 className="highlight">Secondary School</h4>
                            <h5>Mount Abu Public School</h5>
                        </div>
                    </div>
                </div>
                <br/><br/><br/>
            </div>
        )
    }
}
