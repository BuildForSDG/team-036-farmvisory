import React, { Component, Fragment } from 'react'
import logo from '../assets/logo.svg'

class Navbar extends Component {
    componentDidMount(){
        const M = window.M;
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.sidenav');
            var instances = M.Sidenav.init(elems, {});
          });
          document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.modal');
            var instances = M.Modal.init(elems, {});
          });
    }
    render() {
        return (
            <Fragment>
            <div className="navbar-fixed">
            <nav className="teal">
                <div className="container">
                <div class="nav-wrapper">
                <a href="#" className="brand-logo left-end"><img src={logo} alt="logo" /></a>
                <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a href="sass.html">Home</a></li>
                    <li><a href="badges.html">About</a></li>
                    <li><a href="collapsible.html">Services</a></li>
                    <li><a href="mobile.html">Contact</a></li>
                    <li><a class="waves-effect waves-light btn modal-trigger" href="#modal1">Login</a></li>
                    <li><a class="waves-effect waves-light btn modal-trigger" href="#modal2">Sign Up</a></li>
                </ul>
                <div id="modal1" className="modal">
                  <div className="modal-content">
                    <h4 style={{color:'black'}}>Login Form</h4>
                    <p style={{color:'black'}}></p>
                  </div>
                  <div class="modal-footer">
                    <a href="#!" className="modal-close waves-effect waves-green btn-flat">Agree</a>
                  </div>
                </div>

                <div id="modal2" className="modal">
                  <div className="modal-content">
                    <h4 style={{color:'black'}}>Sign Up Form</h4>
                    <p style={{color:'black'}}></p>
                  </div>
                  <div class="modal-footer">
                    <a href="#!" className="modal-close waves-effect waves-green btn-flat">Agree</a>
                  </div>
                </div>
                </div>
                </div>
            </nav>
            </div>
        <ul class="sidenav" id="mobile-demo">
            <li><a href="sass.html">Home</a></li>
            <li><a href="badges.html">About</a></li>
            <li><a href="collapsible.html">Services</a></li>
            <li><a href="mobile.html">Contact</a></li>
        </ul>
            </Fragment>
        )
    }
}

export default Navbar
