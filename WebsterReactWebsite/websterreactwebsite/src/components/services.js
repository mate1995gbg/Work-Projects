import React, { useState } from 'react';
import '../App.css';

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
        
        // Calculate the distance for the horizontal trace
        let distance;
        let isLeft = true;
        let isAbove = false;

        if (serviceRect.right < serviceDetailRect.left) {
            // Service div is on the left side
            distance = serviceDetailRect.left - serviceRect.right;
        } else if (serviceRect.left > serviceDetailRect.right) {
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
            description: 'We build responsive and modern websites, any way you like it.',
            icon: '🌐',
        },
        apps: {
            title: 'Mobile Apps',
            description: 'We create mobile applications for both iOS and Android.',
            icon: '📱',
        },
        apis: {
            title: 'APIs',
            description: 'We develop robust APIs for your applications.',
            icon: '🔗',
        },
        databases: {
            title: 'Databases',
            description: 'We design and manage scalable databases.',
            icon: '🗄️',
        }
    };

    return (
        <header className="App-header-services">
            <div className="service-personalinfo-wrapper">
                <div className="service-personalinfo-container">
                    <div className="service-personalinfo-segment">
                        <div className="service-personalinfo-iconcontainer">
                            <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#666666"><path d="M479.33-120 192.67-276.67v-240L40-600l439.33-240L920-600v318h-66.67v-280L766-516.67v240L479.33-120Zm0-316 301.34-164-301.34-162-300 162 300 164Zm0 240.33 220-120.66v-162.34L479.33-360l-220-120v163.67l220 120.66ZM480-436Zm-.67 79.33Zm0 0Z"/></svg>
                        </div>
                        <h3>Tekniskt inriktad</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                    <div className="service-personalinfo-segment">                        
                        <div className="service-personalinfo-iconcontainer">
                            <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#666666"><path d="m320-241.33-240-240 241.33-241.34L369-675 175-481l192.33 192.33L320-241.33ZM638.67-240 591-287.67l194-194L592.67-674 640-721.33l240 240L638.67-240Z"/></svg>
                        </div>
                        <h3>Bred kunskapsgrund</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                    <div className="service-personalinfo-segment">
                        <div className="service-personalinfo-iconcontainer">
                            <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#5f6368"><path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z"/></svg>
                        </div>
                        <h3>Röd tråd</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                </div>
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
            </div>
            <div className="service-detail" style={detailStyle}>
                <h2>{detailData.title}</h2>
                <p>{detailData.icon} {detailData.description}</p>
            </div>
        </header>
    );
  }
  
  export default Services;