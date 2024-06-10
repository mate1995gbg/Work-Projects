
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
            height: '12vh',
            opacity: '1'
        });

        const serviceDetailRect = document.querySelector('.service-detail').getBoundingClientRect();
        
        //calculate the distance for the horizontal trace
        let distance;
        let isLeft = true;
        let isAbove = false;

        if (serviceRect.right < serviceDetailRect.left){
            distance = serviceDetailRect.left - serviceRect.right;
        } 
        
        else if (serviceRect.left > serviceDetailRect.right) {
            // Service div is on the right side
            distance = serviceRect.left - serviceDetailRect.right;
            isLeft = false;
        } else {
            // Service div is directly above the detail div
            distance = Math.abs((serviceRect.left + serviceRect.width / 2) - (serviceDetailRect.left + serviceDetailRect.width / 2));
            isAbove = true;
        }

        const verticalTrace = document.querySelector(`.service-trace[data-for="${detail}"] .vertical-trace`);
        const horizontalTrace = document.querySelector(`.service-trace[data-for="${detail}"] .horizontal-trace`);
        if (verticalTrace && horizontalTrace) {
            if (isAbove) {
                verticalTrace.style.height = '2vh'; // Adjust to desired height of trace
            } else {
                verticalTrace.style.height = '12vh'; // Adjust to desired height of trace
                horizontalTrace.style.width = `${Math.abs(30 + distance)}px`; // Adjust to calculated width of horizontal trace
                horizontalTrace.style.left = isLeft ? '0' : 'auto';
                horizontalTrace.style.right = isLeft ? 'auto' : '0';
                horizontalTrace.style.transform = 'none';
            }
        }
    };

    const handleMouseOut = (detail) => {
        setDetailStyle({
            height: '0',
            opacity: '0'
        });

        const verticalTrace = document.querySelector(`.service-trace[data-for="${detail}"] .vertical-trace`);
        const horizontalTrace = document.querySelector(`.service-trace[data-for="${detail}"] .horizontal-trace`);
        if (verticalTrace && horizontalTrace) {
            verticalTrace.style.height = '0';
            horizontalTrace.style.width = '0';
        }
    };

    return (
        <header className="App-header-services">
            <div className="service-header">
                <p className="service-header-text">We can help you with your IT Project -- from <span className="highlight-cyan">idea</span> to <span className="highlight-magenta">finished product</span> .</p>
            </div>
            <div className="service-main-div">
                <div className="service-div" data-detail="Website details" onMouseOver={(e) => handleMouseOver(e, 'Website details')} onMouseOut={() => handleMouseOut('Website details')}>
                    <p className='service-text'>Websites</p>
                </div>
                <div className="service-div" data-detail="App details" onMouseOver={(e) => handleMouseOver(e, 'App details')} onMouseOut={() => handleMouseOut('App details')}>
                    <p className='service-text'>Mobile Apps</p>
                </div>
                <div className="service-div" data-detail="API details" onMouseOver={(e) => handleMouseOver(e, 'API details')} onMouseOut={() => handleMouseOut('API details')}>
                    <p className="service-text">API:s</p>
                </div>
                <div className="service-div" data-detail="Database details" onMouseOver={(e) => handleMouseOver(e, 'Database details')} onMouseOut={() => handleMouseOut('Database details')}>
                    <p className="service-text">Databases</p>
                </div>

            </div>
            <div className="service-trace-container">
                <div className="service-trace" data-for="Website details">
                    <div className="vertical-trace"></div>
                    <div className="horizontal-trace horizontal-left"></div>
                </div>
                <div className="service-trace" data-for="App details">
                    <div className="vertical-trace"></div>
                    <div className="horizontal-trace horizontal-left"></div>
                </div>
                <div className="service-trace" data-for="API details">
                    <div className="vertical-trace"></div>
                    <div className="horizontal-trace horizontal-right"></div>
                </div>
                <div className="service-trace" data-for="Database details">
                    <div className="vertical-trace"></div>
                    <div className="horizontal-trace horizontal-right"></div>
                </div>
            </div>
            <div className="service-detail" style={detailStyle}>{detailText}</div>
        </header>
    );
  }
  
  export default Services;