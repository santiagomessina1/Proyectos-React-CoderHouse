import React, { useContext, useState, useEffect } from 'react'
import ItemCount from './ItemCount'
import { FaHeart } from "react-icons/fa"
import { Link } from 'react-router-dom';
import { CartContext } from '../Context/CartContext';
import { FavouritesContext } from '../Context/FavouritesContext';


const ItemDetail = ({ productDetail }) => {

    const { addToCart } = useContext(CartContext)
    const {addToFavourites, deleteToFavourites, wishList} = useContext(FavouritesContext)
    const [changeBtn, setChangeBtn] = useState() 
    
    // =>{
    //     const savedItems = localStorage.getItem("savedItem");
    //     return savedItems ? JSON.parse(savedItems) : []
    // })
    // // useEffect(() => {
    // //     localStorage.setItem("savedItem", JSON.stringify(changeBtn))
    // //   }, [changeBtn])


    const onAdd = (qty) => {
        setChangeBtn(true)
        addToCart(productDetail, qty)
    }

    
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
                                <div className='itemCount'>
                                    <ItemCount stock={10} initial={1} onAdd={onAdd} />
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
                                    <span onClick={deleteToFavourites}  > <FaHeart className='liked' /></span>
                                </>
                                :
                                <div>
                                    <h5>Agregar a favoritos</h5>
                                    <span onClick={addToFavourites} > <FaHeart className='disliked' /></span>
                                </div>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default ItemDetail










