
import React, { useState } from 'react';
import '../App.css';
import logo from '../svg/logo.svg';
function Services() {
    const [detailData, setDetailData] = useState({});
    const [detailStyle, setDetailStyle] = useState({});

    const handleMouseOver = (event, data) => {
        const serviceRect = event.target.getBoundingClientRect();
        const containerRect = event.target.parentElement.getBoundingClientRect();

        setDetailData(data);
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

        const verticalTrace = document.querySelector(`.service-trace[data-for="${data.title}"] .vertical-trace`);
        const horizontalTrace = document.querySelector(`.service-trace[data-for="${data.title}"] .horizontal-trace`);
        const serviceTrace = document.querySelector(`.service-trace[data-for="${data.title}"]`);
        if (verticalTrace && horizontalTrace && serviceTrace) {
            if (isAbove) {
                verticalTrace.style.height = '2vh'; // Adjust to desired height of trace
            } else {
                verticalTrace.style.height = '12vh'; // Adjust to desired height of trace
                horizontalTrace.style.width = `${Math.abs(30 + distance)}px`; // Adjust to calculated width of horizontal trace
                horizontalTrace.style.left = isLeft ? '0' : 'auto';
                horizontalTrace.style.right = isLeft ? 'auto' : '0';
                horizontalTrace.style.transform = 'none';
            }
            serviceTrace.classList.remove('delay-vertical-trace');
        }
    };

    const handleMouseOut = (data) => {
        setDetailStyle({
            height: '0',
            opacity: '0'
        });

        const verticalTrace = document.querySelector(`.service-trace[data-for="${data.title}"] .vertical-trace`);
        const horizontalTrace = document.querySelector(`.service-trace[data-for="${data.title}"] .horizontal-trace`);
        const serviceTrace = document.querySelector(`.service-trace[data-for="${data.title}"]`);
        if (verticalTrace && horizontalTrace && serviceTrace) {
            verticalTrace.style.height = '0';
            horizontalTrace.style.width = '0';
            // Add the delay class
            serviceTrace.classList.add('delay-vertical-trace');
        }
        
    };

    const serviceDetails = {
        websites: {
            title: 'Websites',
            description: 'We build responsive and modern websites, any way you like them.',
            icon: <span class="material-symbols-outlined">language</span>,
        },
        apps: {
            title: 'Mobile Apps',
            description: 'We create mobile applications for both iOS and Android.',
            icon: <span class="material-symbols-outlined">smartphone</span>,
        },
        apis: {
            title: 'APIs',
            description: 'We develop robust APIs for your applications.',
            icon: <span class="material-symbols-outlined">api</span>,
        },
        databases: {
            title: 'Databases',
            description: 'We design and manage scalable databases.',
            icon: <span class="material-symbols-outlined">database</span>,
        },
        hosting: {
            title: 'Web Hosting',
            description: 'We can provide hosting and maintenance for your website.',
            icon: <span class="material-symbols-outlined">support_agent</span>,
        }
    };

    return (
        <header className="App-header-services">
            <div className="service-header">
                <p className="service-header-text">We can help you with your IT Project -- from <span className="highlight-cyan">idea</span> to <span className="highlight-magenta">finished product</span> .</p>
            </div>
            <div className="service-main-div">
                <div className="service-div" data-detail="Websites" onMouseOver={(e) => handleMouseOver(e, serviceDetails.websites)} onMouseOut={() => handleMouseOut(serviceDetails.websites)}>
                    <p className='service-text'>Websites</p>
                </div>
                <div className="service-div" data-detail="Mobile Apps" onMouseOver={(e) => handleMouseOver(e, serviceDetails.apps)} onMouseOut={() => handleMouseOut(serviceDetails.apps)}>
                    <p className='service-text'>Mobile Apps</p>
                </div>
                <div className="service-div" data-detail="APIs" onMouseOver={(e) => handleMouseOver(e, serviceDetails.apis)} onMouseOut={() => handleMouseOut(serviceDetails.apis)}>
                    <p className="service-text">API:s</p>
                </div>
                <div className="service-div" data-detail="Databases" onMouseOver={(e) => handleMouseOver(e, serviceDetails.databases)} onMouseOut={() => handleMouseOut(serviceDetails.databases)}>
                    <p className="service-text">Databases</p>
                </div>
                <div className="service-div" data-detail="Web Hosting" onMouseOver={(e) => handleMouseOver(e, serviceDetails.hosting)} onMouseOut={() => handleMouseOut(serviceDetails.hosting)}>
                    <p className="service-text">Web Hosting</p>
                </div>
            </div>
            <div className="service-trace-container">
                <div className="service-trace" data-for="Websites">
                    <div className="vertical-trace"></div>
                    <div className="horizontal-trace horizontal-left"></div>
                </div>
                <div className="service-trace" data-for="Mobile Apps">
                    <div className="vertical-trace"></div>
                    <div className="horizontal-trace horizontal-left"></div>
                </div>
                <div className="service-trace" data-for="APIs">
                    <div className="vertical-trace"></div>
                    <div className="horizontal-trace horizontal-right"></div>
                </div>
                <div className="service-trace" data-for="Databases">
                    <div className="vertical-trace"></div>
                    <div className="horizontal-trace horizontal-right"></div>
                </div>
                <div className="service-trace" data-for="Web Hosting">
                    <div className="vertical-trace"></div>
                    <div className="horizontal-trace horizontal-right"></div>
                </div>
                {/* <img src={logo} className="App-logo"/> */}
            </div>
            <div className="service-detail" style={detailStyle}>
                <p>{detailData.icon}</p>
                <p>{detailData.description}</p>
            </div>
        </header>
    );
  }
  
  export default Services;