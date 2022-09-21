import React from 'react'
import ItemCount from './ItemCount'
const ItemDetail = ({ product }) => {
    return (
        <>
                <div className="container-details-products">
                <div className="product-image">
                    <img src="https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F45%2F9d%2F459d9837c4a4ed2a2ff044fbe050f7f2ab9f88a2.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_tshirtstanks_shortsleeve%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]" alt="" className="product-pic" />
                    <div className="dots">
                        <a href="#!" className="active"><i>1</i></a>
                        <a href="#!"><i>2</i></a>
                        <a href="#!"><i>3</i></a>
                        <a href="#!"><i>4</i></a>
                    </div>
                </div>

                <div className="product-details">
                    <section>
                        <h1 className="title">{product.title} </h1>
                        <div className="price">
                            <span className="">$144.99</span>
                        </div>
                        <div className="rate">
                            <a href="#!" className="active">★</a>
                            <a href="#!" className="active">★</a>
                            <a href="#!" className="active">★</a>
                            <a href="#!">★</a>
                            <a href="#!">★</a>
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
                                    <li><a class="dropdown-item" href="#">XS</a></li>
                                    <li><a class="dropdown-item" href="#">S</a></li>
                                    <li><a class="dropdown-item" href="#">M</a></li>
                                    <li><a class="dropdown-item" href="#">L</a></li>
                                    <li><a class="dropdown-item" href="#">XL</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="qty">
                            <h5>Cantidad:   < ItemCount /> </h5>
                            
                        </div>
                </div>
            </div>



            


            
        </>
    )
}

export default ItemDetail










