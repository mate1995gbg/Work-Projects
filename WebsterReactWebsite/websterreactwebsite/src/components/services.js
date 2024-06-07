import '../App.css';
function Services() {
    return (
        <header className="App-header">
            <div className="service-header">
                <p className="service-header-text">We can help you with your IT Project -- from <span className="highlight-cyan">idea</span> to <span className="highlight-magenta">finished product</span></p>
            </div>
            <div className="service-main-div">
                <div className="service-div">
                    <p className='service-text'>Websites</p>
                </div>
                <div className="service-div">
                    <p className='service-text'>Mobile Apps</p>
                </div>
                <div className="service-div">
                    <p className="service-text">API:s</p>
                </div>
                <div className="service-div">
                    <p className="service-text">Databases</p>
                </div>
            </div>
        </header>
    );
  }
  
  export default Services;