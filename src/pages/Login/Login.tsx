import { FormEvent } from "react"
import "./Login.css"
import { login } from "../../utils/auth"
import { user } from "../../utils/tipos"

export function Login() {

  function handleSubmit (event: FormEvent){
    event.preventDefault()
    const user: user = {
      password : event.target.password?.value !== undefined ? event.target.password?.value : null,
      email : event.target.email.value !== undefined ? event.target.email?.value : null
    }
     
    if (String(user.password) && String(user.email)){
      login(user)
    } 
    
    
  }

  return(
  <main className="login-container home">
    <h1 className="login-title">Iniciar sesion</h1>
    <form className="login-form" onSubmit={handleSubmit}>
      <h2>Ingrese los siguientes datos</h2>
      <label htmlFor="email">Ingrese su email</label>
      <input type={"email"} id="email" name="email" className="login-input" required />
      <label htmlFor="password">Ingrese la contraseña</label>
      <input type="password" id="password" name="password" className="login-input" required/>
      <button type="submit" className="buy-obra login-button">iniciar sesion</button>
    </form>
  </main>
  )
}