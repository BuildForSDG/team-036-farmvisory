import React, { Component, Fragment } from 'react'


class Hero extends Component {
    componentDidMount(){
        const M = window.M;
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.slider');
            var instances = M.Slider.init(elems, {});
          });
    }
    render() {
        return (
            <Fragment>
                <div class="slider">
                    <ul class="slides">
                      <li>
                        <img  src="https://images.unsplash.com/photo-1488459716781-31db52582fe9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" /> 
                        <div class="caption center-align">
                          <h3>Good Food!</h3>
                          <h5 class="light grey-text text-lighten-3">Good health</h5>
                        </div>
                      </li>
                      <li>
                        <img src="https://images.pexels.com/photos/3213283/pexels-photo-3213283.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" style={{backgroundPosition:'center'}} /> 
                        <div class="caption left-align">
                          <h3>Bridging the Gap between Farmers and Consumers</h3>
                          <h5 class="light grey-text text-lighten-3">We act as the middle men </h5>
                        </div>
                      </li>
                      <li>
                        <img src="https://images.pexels.com/photos/2255999/pexels-photo-2255999.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" /> 
                        <div class="caption right-align">
                          <h3>A heathy food</h3>
                          <h5 class="light grey-text text-lighten-3">Healthy life for all</h5>
                        </div>
                      </li>
                      <li>
                        <img src="https://images.unsplash.com/photo-1509099342178-e323b1717dba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=752&q=80" /> 
                        <div class="caption center-align">
                          <h3>This is our big Tagline!</h3>
                          <h5 class="light grey-text text-lighten-3">Here's our small slogan.</h5>
                        </div>
                      </li>
                    </ul>
              </div>
            </Fragment>
        )
    }
}

export default Hero
