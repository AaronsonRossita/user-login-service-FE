
import { Link, useMatch, useResolvedPath } from "react-router-dom"
import classes from "./Navbar.module.css"

function Navbar() {
    return (
        <nav className={classes.nav}>
            <Link to="/" className={classes.siteTitle}>
                Site Name
            </Link>
            <ul>
                <CustomLink to="/login">Login</CustomLink>
                <CustomLink to="/signUp">Sign-Up</CustomLink>
            </ul>
        </nav>
    )
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })

    return (
        <li className={isActive ? classes.active : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}

export default Navbar;


