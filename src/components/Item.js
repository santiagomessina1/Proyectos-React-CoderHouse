import React from 'react'

const Item = ({ product }) => {

  return (
    <section className='products'>
      <div className="card-product">
        <div className="container">
          <a href="">
            <div className="card">
              <img src={product.image} alt="" />
              <div className="card-body">
                <div className="row">
                  <div className="card-title">
                    <h4> {product.title} </h4>
                    <h3>$ {product.price} </h3>
                  </div>
                  <hr />
                  
                  <div className="view-btn">
                    <a href="" >Ver mas detalles</a>
                  </div> 
                </div>
              </div>
            </div>
          </a>
          
        </div>
      </div>
     
    </section>
  )

}

export default Item