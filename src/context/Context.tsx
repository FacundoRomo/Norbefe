import { ReactNode, createContext } from "react";
import { Context } from "../utils/cuadros";
import { UseFilter } from "../hooks/hooks";


export const PricesContext = createContext<Context>({} as Context)


export function PricesProvider({children}:{children:ReactNode}){
  const { filteredProducts, setFilter, minMaxPrice,filter, cuadros } = UseFilter()
  return(
    <PricesContext.Provider 
      value={{filteredProducts,setFilter,minMaxPrice,filter,cuadros}}>
        {children}
    </PricesContext.Provider>
  )
}