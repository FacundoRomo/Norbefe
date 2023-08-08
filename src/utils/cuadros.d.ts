import React from "react"

export type Cuadros  ={
  id: string,
  title: string,
  img:string,
  description:string,
  price: number
}

export type Filters ={
  minPrice:number,
  maxPrice:number
}

export type Context = {
  filteredProducts : Cuadros[],
  setFilter:React.Dispatch<React.SetStateAction<number>>,
  minMaxPrice:Filters,
  filter:number,
  cuadros: Cuadros[] | null
}
declare global {
  interface Document {
    startViewTransition(callback: () => void): void;
  }
}