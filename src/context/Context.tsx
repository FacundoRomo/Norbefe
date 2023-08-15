import { ReactNode, createContext } from "react";
import { Context } from "../utils/tipos";
import { UseFilter } from "../hooks/hooks";


export const PricesContext = createContext<Context>({} as Context)


export function PricesProvider({children}:{children:ReactNode}){
  const { filteredProducts, setFilter, minMaxPrice,filter, cuadros } = UseFilter()
  console.log("paso por aca")
  return(
    <PricesContext.Provider 
      value={{filteredProducts,setFilter,minMaxPrice,filter,cuadros}}>
        {children}
    </PricesContext.Provider>
  )
}