
import React, { useState } from 'react';
import '../App.css';

function Services() {
    const [detailText, setDetailText] = useState('');
    const [detailStyle, setDetailStyle] = useState({});

    const handleMouseOver = (event, detail) => {
        const serviceRect = event.target.getBoundingClientRect();
        const containerRect = event.target.parentElement.getBoundingClientRect();

        setDetailText(detail);
        setDetailStyle({
            top: `${serviceRect.bottom - containerRect.top + 10}px`,
            height: '100px',
            opacity: '1'
        });
    };

    const handleMouseOut = () => {
        setDetailStyle({
            height: '0',
            opacity: '0'
        });
    };

    return (
        <header className="App-header-services">
            <div className="service-header">
                <p className="service-header-text">We can help you with your IT Project -- from <span className="highlight-cyan">idea</span> to <span className="highlight-magenta">finished product</span> .</p>
            </div>
            <div className="service-main-div">
                <div className="service-div" data-detail="Website details" onMouseOver={(e) => handleMouseOver(e, 'Website details')} onMouseOut={handleMouseOut}>
                    <p className='service-text'>Websites</p>
                </div>
                <div className="service-trace"></div>
                <div className="service-div" data-detail="App details" onMouseOver={(e) => handleMouseOver(e, 'App details')} onMouseOut={handleMouseOut}>
                    <p className='service-text'>Mobile Apps</p>
                </div>
                <div className="service-trace"></div>
                <div className="service-div" data-detail="API details" onMouseOver={(e) => handleMouseOver(e, 'API details')} onMouseOut={handleMouseOut}>
                    <p className="service-text">API:s</p>
                </div>
                <div className="service-trace"></div>
                <div className="service-div" data-detail="Database details" onMouseOver={(e) => handleMouseOver(e, 'Database details')} onMouseOut={handleMouseOut}>
                    <p className="service-text">Databases</p>
                </div>
                <div className="service-trace"></div>
            </div>
            <div className="service-detail" style={detailStyle}>{detailText}</div>
        </header>
    );
  }
  
  export default Services;