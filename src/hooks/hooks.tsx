import { useEffect, useState } from "react";
import { Cuadros, Filters } from "../utils/tipos";
import { getMinMaxPrices } from "../utils/getMinMaxPrices";

export function UseFilter() {
  const [cuadros, setCuadros] = useState<Cuadros[] | null>(null)
  const [minMaxPrice, setMinMaxPrice] = useState<Filters>({ minPrice: 0, maxPrice: 0 });
  const [filter, setFilter] = useState<number>(20000);
  const [filteredProducts, setFilteredProducts] = useState<Cuadros[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("https://raw.githubusercontent.com/FacundoRomo/Norbefe/master/src/cuadros.json")
        if (!response.ok) {
          throw new Error("Error al obtener los cuadros" + response.status)
        }
        const data = await response.json()
        setCuadros(data)
        const prices = getMinMaxPrices(data)
        setMinMaxPrice(prices)
        setFilter(prices.maxPrice)
      } catch (error) {
        if (error instanceof Error){
          console.error("Error al cargar la informacion", error.message)
        }
        
      }
    }
    fetchData()
  }, [])

  

  useEffect(() => {
    if (cuadros !== null) {
      function filterProducts(cuadros: Cuadros[]) {
        return cuadros.filter((cuadro) => {
          return cuadro.price <= filter;
        });
      }
      setFilteredProducts(filterProducts(cuadros))
    }
  }, [cuadros,filter])

  return { filteredProducts, setFilter, minMaxPrice, filter,cuadros }
}