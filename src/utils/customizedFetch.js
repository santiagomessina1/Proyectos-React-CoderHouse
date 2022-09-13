
export const customizedFetch = (products) => {
  return new Promise ((res, rej) =>{
        setTimeout(() => {
            res(products)
        }, 2000);
    })
  
}
