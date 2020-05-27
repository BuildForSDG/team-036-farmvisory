import React, { Component } from 'react'
import Product1 from "./assets/Product1.svg"
import Product2 from "./assets/Product2.svg"
import Product3 from "./assets/Product3.svg"

class Product extends Component {
    render() {
        return (
            <div>
               <section className="product-section">
                   <h4 style={{Margin:'20px'}}>Our <span style={{color:'#D98032'}}>Products</span></h4>
                   <div className="container">
                       <div className="row">
                           <div className="col s4 m4">
                               <img src={Product1} alt="" style={{width:'60%'}} />
                           </div>
                           <div className="col s4 m4">
                               <img src={Product2}  alt="" style={{width:'60%'}} />
                           </div>
                           <div className="col s4 m4">
                               <img src={Product3}  alt=""style={{width:'60%'}} />
                           </div>
                       </div>
                   </div>
               </section>
            </div>
        )
    }
}

export default Product
