import React, {useState} from 'react'
import toast, { Toaster } from 'react-hot-toast';


function ItemCount() {
    const [count, setCount] = useState(1);
    let stock = count;
    const onAdd = () =>{
        if(stock >= 10){
            toast("Puedes agregar un maximo de 10 productos")
        }
        else{
            setCount(count + 1)
        }
    }

    const onSubstract = () =>{
        if (stock <= 1){
            toast("Por favor, ingresa una cantidad valida")
        }
        else{
            setCount(count - 1)
        }
    }
    const addToCart = () =>{
        if(stock == 1){
            toast("Se agregó un producto")
        }
        else{
            toast("Se agregaron " + parseInt(count) + " productos")
        }
    }
    

    return (
      <>
            <div className="card" >
                <img src="https://static.zara.net/photos///2022/S/0/2/p/0495/425/250/2/w/850/0495425250_1_1_1.jpg?ts=1656403524466" alt="" />
                <h5>CAMISETA ESTAMPADOS GRÁFICOS</h5>
                <div>
                    <button className='increase' onClick={onSubstract}>-</button>
                    <span className='counter' stock={5}>{count}</span>
                    <button className='decrease' onClick={onAdd}>+</button>
                    <button className='addToCart'  onClick={addToCart}>Agregar al carrito</button>
                    <Toaster />
                </div>
            </div>

      </>
    );
  }


export default ItemCount

























// const productos = [
//     {id: 1, title: "CAMISETA ESTAMPADOS GRÁFICOS", img: "https://static.zara.net/photos///2022/S/0/2/p/0495/425/250/2/w/850/0495425250_1_1_1.jpg?ts=1656403524466"}, 

// ]

        {/* <div className="card" >
                <img src="https://static.zara.net/photos///2022/S/0/2/p/0495/425/250/2/w/850/0495425250_1_1_1.jpg?ts=1656403524466" alt="" />
                <h5>CAMISETA ESTAMPADOS GRÁFICOS</h5>
                <div>
                    
                    <button className='increase'  setCount(prevCount => prevCount + 1)} >+</button>
                    <span className='counter'> {decrease} </span>
                    <button className='decrease'onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
                    
                    <button className='addToCart'>Agregar al carrito</button>
                </div>
        </div>
    </> */}
// {
//     productos.map((producto)=>{
//         return(
//         <>
//             <img src="https://static.zara.net/photos///2022/S/0/2/p/0495/425/250/2/w/850/0495425250_1_1_1.jpg?ts=1656403524466" alt=""/>
//             <h5>{producto.title}</h5>
//             <div>
//                 <form action="">
//                     <button className='increase' value="Increase Value">+</button>
//                     <input type="number" value={0}/>
//                     <button className='decrease' value="Decrease Value">-</button>
//                 </form>
//                 <button className='addToCart'>Agregar al carrito</button>
//             </div> 
//         </>
//         )
//     })
// }