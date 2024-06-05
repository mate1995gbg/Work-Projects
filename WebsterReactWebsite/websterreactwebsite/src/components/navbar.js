import { Link } from "react-router-dom";

function Navbar () {
    return (
        <div className="App-navbar">
            <div className="link-div">
                <Link to="/Services" className='navbar-link-style'>Tjänster</Link>
            </div>
            <div className="link-div">
                <Link to="/About" className='navbar-link-style'>Om Oss</Link>
            </div>
            <div className="link-div">
                <Link to="/Contact" className='navbar-link-style'>Kontakt</Link>
            </div>
            <div className="link-div">
                <Link to="/PreviousWork" className='navbar-link-style'>Tidigare Projekt</Link>
            </div>
        </div>
    );
}

export default Navbar;