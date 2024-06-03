import "./header.css";
import logo from "./logo-as.png";
function Header () {
    return(
        <header className="header">
            <img src={logo} className="logo" alt="logo" />
        </header>

    );
}

export default Header;