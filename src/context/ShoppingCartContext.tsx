
import { useContext, createContext, ReactNode } from 'react'



const ShoppingCartContext = () => {

const ShoppingCartContext = createContext({})
  return (
    useContext(ShoppingCartContext)
  )
}

type ShoppingCartProviderProps = {
      children: ReactNode
}

const ShoppingCartProvider = ({children}:ShoppingCartProviderProps) => { 
      return <ShoppingCartContext.Provider value = {{}}>
            {children}
      </ShoppingCartContext.Provider>
}


export default ShoppingCartContext
export default ShoppingCartProvider

