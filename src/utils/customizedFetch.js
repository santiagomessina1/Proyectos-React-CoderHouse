
export const customizedFetch = (products, id) => {
  return new Promise ((res, rej) =>{
        setTimeout(() => {
            if(id){
                const product = products.find((el)=> el.id===id)
                res(product)
            }else{
                res(products)
            }
        }, );
    })
  
}






