import { NavLink } from "react-router-dom"
import "./footer.scss"
export default function Footer(){

    return (
        <footer>
            <div className="footer-container">
            <p>©Meteoben</p>
            <NavLink to="mentions-legales"><p>Mentions Légales</p></NavLink>
            </div>
        </footer>
    )
}