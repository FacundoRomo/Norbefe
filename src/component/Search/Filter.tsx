import { useRef,useContext, useId } from "react"
import "./Filter.css"
import { PricesContext } from "../../context/Context"


export function Filter() {
  const { minMaxPrice, setFilter,filter:price } = useContext(PricesContext)
  const maxPriceId = useId()

  const inputFilter = useRef<HTMLInputElement>(null)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault()

  }
  function handleChangeMaxPrice (e: React.ChangeEvent<HTMLInputElement>) {
    setFilter(Number(e.target.value))
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor={maxPriceId}>Más barato que:</label>
      <input 
        ref={inputFilter}
        type="range" 
        min={minMaxPrice.minPrice} 
        max={minMaxPrice.maxPrice} 
        value={price}
        step={500}
        id={maxPriceId} 
        placeholder="...rojo,azul..." 
        onChange={handleChangeMaxPrice} />
      <span>{price}</span>
    </form>
  )
}