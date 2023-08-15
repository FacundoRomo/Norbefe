import { PricesContext } from "../../context/Context";
import { Cuadro } from "../cuadro/Cuadro";
import { useContext } from "react"
import "./Products.css"

export function Products() {
  const { filteredProducts } = useContext(PricesContext)

  

  return (
    <section className="products">
      {
        filteredProducts.map(cuadro => (
            <Cuadro
              key={cuadro.id}
              id={cuadro.id}
              title={cuadro.title}
              img={cuadro.img}
              description={cuadro.description}
              price={cuadro.price}
            />
        ))
      }
    </section>
  )
}