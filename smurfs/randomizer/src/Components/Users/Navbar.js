import React, {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'

class Navbar extends Component {
    logOut(e) {
        e.preventDefault()
        localStorage.removeItem('token')
        this.props.history.push("/")
    }

    render() {
        const loginRegLink = (
            <ul className ="navbar-nav">
                <li className = "nav-item">
                    <Link to = "/login" className = "nav-link">
                        Login
                    </Link>
                </li>
                <li className = "nav-item">
                    <Link to = "/register" className = "nav-link">
                        Register
                    </Link>
                </li>
                <li className = "nav-item">
                    <a href = "/" onClick = {this.logOut.bind(this)} className = "nav-link">
                        Logout
                    </a>
                </li>

            </ul>
        )
        const userLinks = (
            <ul className ="navbar-nav">
                <li className = "nav-item">
                    <Link to = "/home" className = "nav-link">
                        Home
                    </Link>
                </li>
                <li className = "nav-item">
                    <Link to = "/contacts" className = "nav-link">
                        Contacts
                    </Link>
                </li>
                <li className = "nav-item">
                    <Link to = "/services" className = "nav-link">
                        Services
                    </Link>
                </li>
                <li className = "nav-item">
                    <a href = "/" onClick = {this.logOut.bind(this)} className = "nav-link" >
                        Logout
                    </a>
                </li>
            </ul>
        )

        return (
            <nav className = "navbar navbar-expand-lg navbar-dark bg-dark rounded">
                <button className = "navbar-toggler"
                    type = "button"
                    data-toggle = "collapse"
                    data-target = "#navbar1"
                    aria-controls = "navbar1"
                    aria-label = "Toggle navigation">
                        <span className = "navbar-toggle-icon"></span>
                    </button>

                    <div className = "collapse navbar-collapse justify-content md-center"
                    id = "navbar1">
                        <ul className = "navbar-nav">
                            <li className = "nav-item">
                                <Link to ="/" className = "nav-link">
                                    Home
                                </Link>
                            </li>
                        </ul>
                        {localStorage.token ? userLinks : loginRegLink}
                    </div>
            </nav>
        )
    }
}

export default withRouter(Navbar);