import { PricesContext } from "../../context/Context";
import { Cuadro } from "../cuadro/Cuadro";
import { useContext } from "react"
import "./Products.css"
import { Link } from "react-router-dom";

export function Products() {
  const { filteredProducts } = useContext(PricesContext)

  return (
    <section className="products">
      {
        filteredProducts.map(cuadro => (
          <Link to={`cuadro/${cuadro.id}`} key={cuadro.id}>
            <Cuadro
              key={cuadro.id}
              id={cuadro.id}
              title={cuadro.title}
              img={cuadro.img}
              description={cuadro.description}
              price={cuadro.price}
            />
          </Link>
        ))
      }
    </section>
  )
}