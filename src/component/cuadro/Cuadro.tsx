import "./Cuadro.css"
import { Cuadros } from "../../utils/cuadros"
import { SupportViewTransition } from "../../utils/NavigateTo"
import { useNavigate } from "react-router-dom"

export function Cuadro({id,title,img,description,price} : Cuadros) {
  const navigate = useNavigate()
  function viewNagivate (to:string){
    
    if (!SupportViewTransition){
      navigate(to)
      console.log("daasdda")
    } 

    document.startViewTransition(() =>{
      navigate(to, {replace:true})
    } )
  }
  
  
  return (
    <section className="section-Card content" onClick={() => {viewNagivate(`/cuadro/${id}`)}}>
        <img src={img} alt={title} loading={"lazy"} className="img-cuadro" />
        <h2>{title}</h2>
        <p>{description}</p>
        <span className="price">${price}</span>
    </section>
  )
}