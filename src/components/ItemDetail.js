import React from 'react'
import ItemCount from './ItemCount'

const ItemDetail = ({ productDetail }) => {
    return (
        <>
            <hr />
            <div className="container-details-products">
                <div className="product-image">
                    <img src={productDetail.image} alt="" className="product-pic" />
                    <div className="dots">
                        <a href="#!" className="active"><i>1</i></a>
                        <a href="#!"><i>2</i></a>
                        <a href="#!"><i>3</i></a>
                        <a href="#!"><i>4</i></a>
                    </div>
                </div>

                <div className="product-details">
                    <section>
                        <h1 className="title"> {productDetail.title} </h1>
                        <div className="price">
                            <span className="">${productDetail.price}</span>
                        </div>

                    </section>
                    <div className="controls">
                        <div className="color">
                            <h5>Color</h5>
                            <ul>
                                <li><a href="#!" className="colors color-bdot1 active"></a></li>
                                <li><a href="#!" className="colors color-bdot4"></a></li>
                                <li><a href="#!" className="colors color-bdot5"></a></li>
                            </ul>
                        </div>

                    </div>
                    <div className="size">
                        <div class="dropdown">
                            <a class="btn dropdown-toggle sizes" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Talles
                            </a>

                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item">XS</a></li>
                                <li><a class="dropdown-item">S</a></li>
                                <li><a class="dropdown-item">M</a></li>
                                <li><a class="dropdown-item">L</a></li>
                                <li><a class="dropdown-item">XL</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="qty">
                        <h5>Cantidad:   < ItemCount /> </h5>
                    </div>

                    <div className='details'>
                        <p>MATERIALES, CUIDADOS Y ORIGEN
                            ORIGEN
                            Trabajamos con nuestros proveedores, trabajadores, sindicatos y organismos internacionales para desarrollar una cadena de suministro en la que se respetan y promueven los derechos humanos. </p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ItemDetail










