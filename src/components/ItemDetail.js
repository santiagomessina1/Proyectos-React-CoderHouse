import React from 'react'
import ItemCount from './ItemCount'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const ItemDetail = ({ productDetail }) => {
    return (
        <>
            <hr />
            <div className="container-details-products">
                <div className="product-image">
                    <img src={productDetail.image} alt="" className="product-pic" />

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
                                <li><span className="colors color-bdot1 active"></span></li>
                                <li><span className="colors color-bdot4"></span></li>
                                <li><span className="colors color-bdot5"></span></li>
                            </ul>
                        </div>

                    </div>
                    <div className="size">
                        <DropdownButton id="dropdown-basic-button" title="Talles">
                            <Dropdown.Item href="#/action-1">XS</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">S</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">M</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">L</Dropdown.Item>
                        </DropdownButton>
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










