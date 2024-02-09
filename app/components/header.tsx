import { Link } from "@remix-run/react";
import logo from '../../public/img/logo.svg';
import Navigation from "./navigation";

const Header = () => {    
    return (
        <header className='header'>
            <div className="contenedor barra">
                <Link to="/" className="logo">
                    <img className="logo" src={logo} alt="logo guitar-la" />
                </Link>
                <Navigation />
            </div>
        </header>
    )
}

export default Header;
