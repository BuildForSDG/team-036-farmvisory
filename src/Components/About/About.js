import React, { Component, Fragment } from 'react'
import logo1 from "../assets/logo1.svg" 
import logo2 from "../assets/logo2.svg"
import Avatar from "../assets/Avatar.svg"
import Avatar1 from "../assets/Avatar1.svg"


class About extends Component {
    render() {
        return (
            <Fragment>
               <section className="About-section">     
                   <div className="container">
                    
                    </div>                
                   <h4>About</h4>    
                   <div className="row">
                   <div className="col s12 m6">
                   <div className="card" style={{width:'50%'}}>
                    <div class="card-image waves-effect waves-block waves-light">
                    <img className="activator" src={logo1} />
                    </div>
                    <div className="card-content">
                    <span className="card-title activator grey-text text-darken-4">Card Title<i className="material-icons right">more_vert</i></span>
                    <p><a href="#">This is a link</a></p>
                    </div>
                    <div className="card-reveal">
                    <span class="card-title grey-text text-darken-4">Card Title<i className="material-icons right">close</i></span>
                    <p>Here is some more information about this product that is only revealed once clicked on.</p>
                    </div>
                </div>
                   </div>
                   <div className="col s12 m6">
                   <div className="card" style={{width:'50%'}}>
                    <div class="card-image waves-effect waves-block waves-light">
                    <img className="activator" src={logo2} />
                    </div>
                    <div className="card-content">
                    <span className="card-title activator grey-text text-darken-4">Card Title<i className="material-icons right">more_vert</i></span>
                    <p><a href="#">This is a link</a></p>
                    </div>
                    <div className="card-reveal">
                    <span class="card-title grey-text text-darken-4">Card Title<i className="material-icons right">close</i></span>
                    <p>Here is some more information about this product that is only revealed once clicked on.</p>
                    </div>
                </div>
                   </div>
               </div> 
               </section>
               <section className="section-testimonials">
                   <div className="container">
                       <h4 style={{textAlign:'center', padding:'20px 0'}}>Testimonials</h4>
                       <div className="row">
                           <div className="col s4 m8">
                               <img src={Avatar} alt="" style={{width:'50%'}}  />
                           </div>
                           <div className="col s8 m4" style={{background:'#009688', marginTop:'20px', borderRadius:'20px'}}>
                               <p style={{color:'white', fontSize:'20px'}}>" I am Juliet ever since i came in contact with farmvisory things have had a turn around for me and my family, i would highly recommend farmvisory to all farmers. "</p>
                           </div>
                       </div>
                       <div className="row">
                           <div className="col s4 m8">
                               <img src={Avatar1} alt="" style={{width:'50%'}}  />
                           </div>
                           <div className="col s8 m4" style={{background:'#009688', marginTop:'20px',  borderRadius:'20px'}}>
                               <p style={{color:'white', fontSize:'20px'}}>" I am Rahman ever since i came in contact with farmvisory things have had a turn around for me and my family, i would highly recommend farmvisory to all farmers. "</p>
                           </div>
                       </div>
                   </div>
               </section>
            </Fragment>
        )
    }
}

export default About
