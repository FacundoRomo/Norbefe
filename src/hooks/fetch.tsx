import { useEffect, useState } from "react"
import { Cuadros } from "../utils/tipos"

export function UseSearchCuadros (){
  const [cuadros, setCuadros] = useState<Cuadros[]>([])
  console.log("dasdasdasdasdasd")

  async function searchCuadros(): Promise<Cuadros[]> {
      try {
        const response = await fetch("src/cuadros.json")
        if (!response.ok) {
          throw new Error("Error al obtener los cuadros")
        }
        const data = await response.json()
        return data as Cuadros[]
      } catch (error) {
        console.error("Error al obtener la informacion", error)
        throw error
      }
    }
  useEffect(() => {
    async function fetchData() {
      try{
        const data = await searchCuadros()
        console.log(data)
        setCuadros(data)
      } catch(error){
        console.error("Error al recuperar los cuadros", error)
      }
    }

    fetchData()
  },[])

  return { cuadros }
}