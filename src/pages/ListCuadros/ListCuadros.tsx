import { useContext } from "react";
import { PricesContext } from "../../context/Context";
import { Cuadro } from "../../component/cuadro/Cuadro";
import "./ListCuadros.css"
import { Link } from "react-router-dom";
import { RandomsCuadros } from "../../utils/RandomsCuadros";

export function ListCuadros() {
  const { cuadros } = useContext(PricesContext)
  const { obrasRandom } = RandomsCuadros(cuadros)

  return (
    <>
      {obrasRandom ?
        <section className="listCuadros">
          {
            obrasRandom.map(cuadro => (
              <Link to={`/cuadro/${cuadro.id}`} replace key={cuadro.id}>
                <Cuadro
                  key={cuadro.id}
                  id={cuadro.id}
                  title={cuadro.title}
                  img={cuadro.img}
                  price={cuadro.price}
                  description={cuadro.description} />
              </Link>))
          }
        </section>
        : <> </>
      }
    </>
  )
}

