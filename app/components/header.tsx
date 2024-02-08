import { Link } from "@remix-run/react";
import logo from '../../public/img/logo.svg';

const Header = () => {
    return (
        <header className='header'>
            <div className="contenedor barra">
                <Link to="/" className="logo">
                    <img className="logo" src={logo} alt="logo guitar-la" />
                </Link>
                <nav className="navigation">
                    <Link to="/"> Home </Link>
                    <Link to="/about-us"> About Us </Link>
                    <Link to="/blog"> Blog </Link>
                    <Link to="/market"> Market </Link>
                </nav>
            </div>
        </header>
    )
}

export default Header;
