import { Link } from "react-router-dom";

function Navbar () {
    return (
        <div className="App-navbar">
            <div className="link-div">
                <a href="#services" className='navbar-link-style'>Services</a>
            </div>
            <div className="link-div">
                <a href="#about" className='navbar-link-style'>About</a>
            </div>
            <div className="link-div">
                <a href="#contact" className='navbar-link-style'>Contact</a>
            </div>
            <div className="link-div">
                <a href="#previouswork" className='navbar-link-style'>Testimonials</a>
            </div>
        </div>
    );
}

export default Navbar;