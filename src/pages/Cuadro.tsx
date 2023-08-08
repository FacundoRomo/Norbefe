import { useContext } from "react"
import "./Cuadro.css"
import { PricesContext } from "../context/Context"
import { ListCuadros } from "./ListCuadros"
import { ScrollRestoration, useLoaderData } from "react-router-dom"
import { WhatsAppLink } from "../utils/WhatsApp"
import { ErrorPage } from "./404"

export async function getCuadro({ params }: any) {

  const obraId = params.id
  return obraId
}

export function Cuadro() {
  const obraId = useLoaderData()
  const { cuadros } = useContext(PricesContext)

  const obra = cuadros?.find(cuadro => cuadro.id === obraId)

  return (
    <>
      <ScrollRestoration />
      {
        obra ?
          <section className="container-obras background-obras">  
            <section className="container-obra">
              <img className="img-obra" src={obra.img} loading={"lazy"}/>
              <section className="info-obra">
                <h2 className="title-obra">{obra.title}</h2>
                <p className="descrp-obra">{obra.description}</p>
                <span className="price-obra">${obra.price}</span>
                <WhatsAppLink
                  linkObra={window.location.toString()} />
              </section>
            </section>
            <aside>
              <ListCuadros />
            </aside>
          </section>
          : <ErrorPage />
      }

    </>
  )
}