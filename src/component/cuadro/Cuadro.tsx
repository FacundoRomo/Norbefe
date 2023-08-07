import "./Cuadro.css"
import { Cuadros } from "../../utils/cuadros"

export function Cuadro({title,img,description,price} : Cuadros) {
  return (
    <section className="section-Card content">
        <img src={img} alt={title} loading="lazy" />
        <h2>{title}</h2>
        <p>{description}</p>
        <span className="price">${price}</span>
    </section>
  )
}