import React from 'react'
import ItemCount from './ItemCount'

const Item = ({ product }) => {

  return (
    <section className='products'>
      <div className="card-product">
        <div className="container">
          <div className="card">
            <img src=" https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Faf%2F33%2Faf33e804c68022e2f5b0e30d935c9c51331c6c70.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]" alt="" />
            <div className="card-body">
              <div className="row">
                <div className="card-title">
                  <h4> {product.title} </h4>
                  <h3>$ {product.price} </h3>
                </div>
                <div className="btn-group">
                  <ItemCount />
                </div>
                <hr />
                
                <div className="view-btn">
                  <a href="">Ver mas detalles</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )

}

export default Item