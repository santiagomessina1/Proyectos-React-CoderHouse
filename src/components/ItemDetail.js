import React, { useState } from 'react'
import ItemCount from './ItemCount'
import { FaHeart } from "react-icons/fa"
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';
import  Select  from 'react-select';

const ItemDetail = ({ productDetail }) => {
    
    const [wishList, setWishList] = useState(false)
    const liked = () => setWishList(!wishList)
    const disliked = () => setWishList(!wishList)
    const [changeBtn, setChangeBtn] = useState(false)
    const onAdd = (count) =>{setChangeBtn(true)}
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
                    </section>

                    
                    <div className="qty">
                        {
                            changeBtn ?
                                <div>
                                    <Link to="/cart" ><h4 className='goToCart'>Ir al Carrito</h4></Link>
                                    <h4 className='inCart'>¡Producto agregado!</h4>
                                </div>
                                :
                                <div>
                                    <ItemCount stock={10} initial={1} onAdd={onAdd} />
                                    {/* <button className='addToCart' id='addToCart' onClick={addToCart}> <CartWidget /> Agregar al carrito</button> */}
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










