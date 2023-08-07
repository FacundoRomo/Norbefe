import { Link } from "react-router-dom"
import "./nav.css"

export function Navbar() {
    return (
        <Link to="/" replace>
            <nav className="nav-bar">
                <h1 className="title">Norbefe</h1>
            </nav>
        </Link>
    )
}