import { Link } from "react-router-dom";

export function ErrorPage (){
  return(
    <section className="container-error background-obras">
      <p className="title-error">Cuadro no encontrado</p>
      <img className="gif-error" src="public\thisIsFine.gif" alt="error al cargar el cuadro" />
      <Link to={"/"} className="back-home">Volver al inicio</Link>
    </section>
  )
}