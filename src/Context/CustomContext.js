import React, {createContext} from 'react'

export const Context = createContext()
const CustomContext = ({children}) => {
  return (
    <Context.Provider value={{}}>
        {children}
    </Context.Provider>
  )
}

export default CustomContext