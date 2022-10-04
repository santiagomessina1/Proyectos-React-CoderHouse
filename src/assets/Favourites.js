import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { FavouritesContext } from '../Context/FavouritesContext'
import FavouriteItem from '../components/FavouriteItem'


const Favourites = () => {

    const favouritesContext = useContext(FavouritesContext);
    const { favorite, clearFavorite, deleteToFavorite } = favouritesContext;

    return (

        <>
            <hr />
            < h1 className='cartTitle'> Lista de favoritos</h1 >

            <section className="list-cart-container">

                {favorite ? (favorite.map(product => {
                    return (<FavouriteItem key={product.id}
                        product={product}
                        deleteToFavorite={deleteToFavorite}
                    />);
                }))
                    : <p>Cargando productos</p>
                }
                {favorite.length ? (
                    <>

                        <div className='cartBtns'>
                            <button
                                className="clearCart"
                                onClick={clearFavorite}
                            >Vaciar Lista de Favoritos</button>
                        </div>
                    </>)
                    : <section className='favorites-section'>
                        <h1>Tus productos favoritos</h1>
                        <h3>Guarda tus items favoritos</h3>
                        <h6>¿Queres guardar los productos que mas te gustan? Hace click en el corazon que se encuentra en el detalle de cada producto y se mostrará aqui.</h6>
                        <Link to="/" className='seeMore'>Ver ahora</Link>
                    </section>
                }
            </section>





        </>
    )
}

export default Favourites



