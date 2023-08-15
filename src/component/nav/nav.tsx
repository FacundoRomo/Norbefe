import { Outlet, useNavigate } from "react-router-dom"
import "./nav.css"
import { SupportViewTransition } from "../../utils/NavigateTo"
import { BiArrowBack } from "react-icons/bi"

export function Navbar() {
  const navigate = useNavigate()
  function viewNagivate(to: string) {

    if (!SupportViewTransition) {
      navigate(to)
      console.log("daasdda")
    }

    document.startViewTransition(() => {
      navigate(to, { replace: true })
    })
  }

  return (
    <>
    <nav className="nav-bar nav-bar-container" onClick={() => viewNagivate("/")}>
      <BiArrowBack className="back-icon"/>
      <h1 className="title">Norbefe</h1>
    </nav>
    <div>
      <Outlet />
    </div>
    </>
  )
}