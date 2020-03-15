import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSidebarOpen: true
        };
        this.toggleSidebar = this.toggleSidebar.bind(this);
    }
    
    componentDidMount() {
        this.checkDimensions();
    }

    checkDimensions() {
        if (window.innerWidth <= 1200) {
            this.setState({
                isSidebarOpen: false
            });
        }
    }

    render() {
        return (
            <nav className="sidebar">
                <button className="sidebar__toggler" onClick={this.toggleSidebar}>
                    <i className={this.state.isSidebarOpen ? "fa fa-close" : "fa fa-bars"}></i>
                </button>
                
                <div className="sidebar__image">
                    <img src="/sidebar_img.jpg" alt="" />
                </div>
                <ul className="sidebar__menu">
                    <li><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
                    <li><NavLink exact to="/about" activeClassName="active">About</NavLink></li>
                    <li><NavLink exact to="/resume" activeClassName="active">Resume</NavLink></li>
                    <li><NavLink exact to="/portfolio" activeClassName="active">Portfolio</NavLink></li>
                    <li><NavLink exact to="/contact" activeClassName="active">Contact</NavLink></li>
                </ul>
                <p className="sidebar__footer">Hand-Crafted with &nbsp;<i className="fas fa-heart"></i></p>
            </nav>
        )
    }

    toggleSidebar() {
        var sidebar = document.getElementsByClassName("sidebar")[0];
        if(this.state.isSidebarOpen) {
            sidebar.style.transform = 'translateX(-100%)';
            this.setState({
                isSidebarOpen: false
            });
        } else {
            sidebar.style.transform = 'translateX(0)';
            this.setState({
                isSidebarOpen: true
            });
        }
    }
}
