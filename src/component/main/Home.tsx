import "./Home.css"
import { Filter } from "../Search/Filter"
import { Products } from "../products/Products"


export function Home() {

  return (
    <>
      <main className="home">
        <Filter />
        <Products />
      </main>
    </>
  )
}