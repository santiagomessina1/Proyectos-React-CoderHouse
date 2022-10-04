import React, { useContext } from 'react'
import { FaHeart } from "react-icons/fa"
import { FavouritesContext } from '../Context/FavouritesContext';
import { Link } from 'react-router-dom';

const FavouriteItem = ({ product }) => {

    const { addToFavorite, deleteToFavorite, wishList } = useContext(FavouritesContext)

    return (
        <>
            <section className='products'>

                <div className="card-product">
                    <div className="container">

                        <div className="card">
                            <img src={`/${product.image}`} alt="" />
                            <div className="card-body">
                                <div className="row">
                                    <div className="card-title">
                                        <h4> {product.title} </h4>
                                        <h3>$ {product.price} </h3>
                                    </div>
                                    <hr />

                                    <div className="view-btn">
                                        <Link to={`/producto/${product.id}`}>Ver mas detalles</Link>

                                        {
                                            wishList ?
                                                <>
                                                    <span onClick={deleteToFavorite}  > <FaHeart className='liked' /></span>
                                                </>
                                                :
                                                <div>
                                                    <span onClick={addToFavorite} > <FaHeart className='disliked' /></span>
                                                </div>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </section>


        </>
    )
}

export default FavouriteItem