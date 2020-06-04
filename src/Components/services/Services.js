import React, { Component } from 'react'

class Services extends Component {
  render() {
    return (
      <div>
        <section className="sevices">
          <h4><span style={{color:'#D98032'}}>Serv</span>ices</h4>
          <div className="container">
            <div className="row">
              <div className="col s12 m6">
                <h6 style={{paddingLeft:'20px'}}>
                  Farm Advaisory
                </h6>
              </div>

              <div className="col s12 m6">
                <h6 style={{paddingLeft:'20px'}}>
                  The Market place
                </h6>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default Services
