import React from 'react'
import { Link } from 'react-router-dom'
const Item = ({ product }) => {

  return (

    <section className='products'>
    <Link to={`/producto/${product.id}`}>
      <div className="card-product">
        <div className="container">
          
            <div className="card">
              <img src={`../${product.image}`} alt="" className="itemImage"/>
              <div className="card-body">
                <div className="row">
                  <div className="card-title">
                    <h4> {product.title} </h4>
                    <h3>$ {product.price} </h3>
                  </div>
                  <hr />
                  
                  <div className="view-btn">
                  <Link to={`/producto/${product.id}`}>Ver mas detalles</Link>
                  </div> 
                </div>
              </div>
            </div>
        </div>
      </div>
      </Link>
     
    </section>
  )

}

export default Item