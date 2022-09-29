import React, { useState } from 'react'
import ItemCount from './ItemCount'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { FaHeart } from "react-icons/fa"
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';





const ItemDetail = ({ productDetail }) => {
    const [cart, setCart] = useState(false)
    const addToCart = () => setCart(!cart)
    const [wishList, setWishList] = useState(false)
    const liked = () => setWishList(!wishList)
    const disliked = () => setWishList(!wishList)
    
   
    return (
        <>
            <hr />
            <div className="container-details-products">
                <div className="product-image">
                    <img src={`../${productDetail.image}`} alt="" className="product-pic" />
                </div>

                <div className="product-details">
                    <section>
                        <h1 className="title" > {productDetail.title} </h1>
                        <div className="price">
                            <span className="">${productDetail.price}</span>
                        </div>
                        

                        <div className="price">    
                            {/* <select title='talles'>
                                {productDetail.talles.map((e) => <option className="botonTalle">{e}</option>)}
                            </select> */}
                        </div>
                    </section>

                    <div className="controls">



                    </div>
                    {/* <div className="size">
                        <DropdownButton id="dropdown-basic-button" title="Talles">
                            <Dropdown.Item>XS</Dropdown.Item>
                            <Dropdown.Item>S</Dropdown.Item>
                            <Dropdown.Item>M</Dropdown.Item>
                            <Dropdown.Item>L</Dropdown.Item>
                        </DropdownButton>
                    </div> */}
                    <div className="qty">
                        {
                            cart ?
                                <div>
                                    <Link to="/cart" ><h4 className='goToCart'>Ir al Carrito</h4></Link>
                                    <h4 className='inCart'>¡Producto agregado!</h4>
                                </div>
                                :
                                <div>
                                    <ItemCount />
                                    <button className='addToCart' id='addToCart' onClick={addToCart}> <CartWidget /> Agregar al carrito</button>
                                </div>
                        }
                    </div>

                    <div className='details'>
                        <p>
                            {productDetail.description}
                        </p>
                    </div>
                    <div className="heart">
                        {
                            wishList ?
                                <>
                                    <h5>¡Agregado a favoritos!</h5>
                                    <span onClick={disliked}> <FaHeart className='liked' /></span>
                                </>
                                :
                                <div>
                                    <h5>Agregar a favoritos</h5>
                                    <span onClick={liked}> <FaHeart className='disliked' /></span>
                                </div>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default ItemDetail










