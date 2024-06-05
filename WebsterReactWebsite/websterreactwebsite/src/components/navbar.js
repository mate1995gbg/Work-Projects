import { Link } from "react-router-dom";

function Navbar () {
    return (
        <div className="App-navbar">
            <div className="link-div">
                <a href="#services" className='navbar-link-style'>Tjänster</a>
            </div>
            <div className="link-div">
                <a href="#about" className='navbar-link-style'>Om Oss</a>
            </div>
            <div className="link-div">
                <a href="#contact" className='navbar-link-style'>Kontakt</a>
            </div>
            <div className="link-div">
                <a href="#previouswork" className='navbar-link-style'>Tidigare Projekt</a>
            </div>
        </div>
    );
}

export default Navbar;