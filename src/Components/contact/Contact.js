import React, { Component } from 'react'
import twitter from "../assets/twitter.svg"
import facebook from "../assets/facebook.svg"
import instagram from "../assets/instagram.svg"

class Contact extends Component {
  render() {
    return (
      <div>
         <footer class="page-footer teal">
          <div class="container">
            <div class="row">
              <div class="col l6 s12">
              <ul>
                  <li><a class="grey-text text-lighten-3" href="#!"><img src={twitter} alt="" /></a></li>
                  <li><a class="grey-text text-lighten-3" href="#!"><img src={facebook} alt="" /></a></li>
                  <li><a class="grey-text text-lighten-3" href="#!"><img src={instagram} alt="" /></a></li>
                </ul>
              </div>
              <div class="col l4 offset-l2 s12">
                <h5 class="white-text">Links</h5>
                <ul>
                  <li><a class="grey-text text-lighten-3" href="#!">Farm Advisory</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Market Place</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="footer-copyright">
            <div class="container">
            <p style={{textAlign:'center', marginBottom:'20px'}}>© 2020 Copyright Farmvisory-Team-036 #BuildforSDG</p>
            </div>
          </div>
        </footer>
      </div>
    )
  }
}

export default Contact
