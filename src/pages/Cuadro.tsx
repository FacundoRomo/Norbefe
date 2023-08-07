import { useContext } from "react"
import "./Cuadro.css"
import { PricesContext } from "../context/Context"
import { Navbar } from "../component/nav/nav"
import { ListCuadros } from "./ListCuadros"
import { ScrollRestoration, useLoaderData } from "react-router-dom"
import { WhatsAppLink } from "../utils/WhatsApp"

export async function getCuadro({ params }: any) {

  const obraId = params.id
  return obraId
}

export function Cuadro() {
  const obraId = useLoaderData()
  // const { obra } = useLoaderData() as { obra?: Cuadros }
  const { cuadros } = useContext(PricesContext)

  const obra = cuadros?.find(cuadro => cuadro.id === obraId)

  return (
    <>
    <ScrollRestoration />
      {
        obra ?
          <>
            <Navbar />
            <main className="container-obra">
              <img className="img-obra" src={obra?.img} />
              <section className="info-obra">
                <h2 className="title-obra">{obra?.title}</h2>
                <p className="descrp-obra">{obra?.description}</p>
                <span className="price-obra">${obra?.price}</span>
                <WhatsAppLink 
                  linkObra={window.location.toString()}/>
              </section>
            </main>
            <aside>
              <ListCuadros />
            </aside>
          </>
          : <></>
      }

    </>
  )
}