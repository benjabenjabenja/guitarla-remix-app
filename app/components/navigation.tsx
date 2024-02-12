import { Link, useLocation } from "@remix-run/react";
import cartIcon from "../../public/img/carrito.png";

const Navigation = () => {
    
    const location = useLocation();
    return (
        <nav className="navigation">
            <Link to="/" className={location.pathname === "/" ? 'active' : ''}> Home </Link>
            <Link to="/about-us" className={location.pathname === "/about-us" ? 'active' : ''}> About Us </Link>
            <Link to="/blog" className={location.pathname === "/blog" ? 'active' : ''}> Blog </Link>
            <Link to="/market" className={location.pathname === "/market" ? 'active' : ''}> Market </Link>
            <Link to="/cart" className="cart">
                <img width={24} height={24} src={cartIcon} alt="icon of cart market" />
            </Link>
        </nav>
    )
}

export default Navigation
