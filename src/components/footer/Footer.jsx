import { NavLink } from "react-router-dom"
import { Link } from "react-router-dom"
import "./footer.scss"
export default function Footer(){

    return (
        <footer>
            <div className="footer-container">
            <Link to="https://meteoben.com/" target="_blank"  rel="noreferrer"><p>©Meteoben</p></Link>
            <NavLink to="mentions-legales"><p>Mentions Légales</p></NavLink>
            </div>
        </footer>
    )
}