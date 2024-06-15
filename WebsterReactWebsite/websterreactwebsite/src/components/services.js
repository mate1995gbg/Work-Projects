import React, { useState } from 'react';
import '../App.css';
import mvc_icon_svg from '../svg/mvc_icon.svg';
import java_icon_svg from '../svg/java-svgrepo-com.svg';
import maui_icon_svg from '../svg/net_maui_svg.svg';
import swagger_icon_svg from '../svg/swagger-svgrepo-com.svg';
import ssms_icon_svg from '../svg/dbs-sqlserver-svgrepo-com.svg';
import mongodb_icon_svg from '../svg/mongodb-svgrepo-com.svg';
import sqlite_icon_svg from '../svg/sqlite-svgrepo-com.svg';

function Services() {
    const [detailData, setDetailData] = useState({});
    const [detailStyle, setDetailStyle] = useState({});

    const handleMouseOver = (event, data) => {
        const serviceRect = event.target.getBoundingClientRect();
        const containerRect = event.target.parentElement.getBoundingClientRect();

        setDetailData(data);
        setDetailStyle({
            top: `${serviceRect.bottom - containerRect.top + 10}px`,
            height: '7vh',
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
                horizontalTrace.style.width = `${Math.abs(15 + distance)}px`; // Adjust to calculated width of horizontal trace
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
            description: 'Android',
            icon: <svg fill="#666666" width="40px" height="40px" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M23.834 8.101a13.912 13.912 0 0 1-13.643 11.72 10.105 10.105 0 0 1-1.994-.12 6.111 6.111 0 0 1-5.082-5.761 5.934 5.934 0 0 1 11.867-.084c.025.983-.401 1.846-1.277 1.871-.936 0-1.374-.668-1.374-1.567v-2.5a1.531 1.531 0 0 0-1.52-1.533H8.715a3.648 3.648 0 1 0 2.695 6.08l.073-.11.074.121a2.58 2.58 0 0 0 2.2 1.048 2.909 2.909 0 0 0 2.695-3.04 7.912 7.912 0 0 0-.217-1.933 7.404 7.404 0 0 0-14.64 1.603 7.497 7.497 0 0 0 7.308 7.405s.549.05 1.167.035a15.803 15.803 0 0 0 8.475-2.528c.036-.025.072.025.048.061a12.44 12.44 0 0 1-9.69 3.963 8.744 8.744 0 0 1-8.9-8.972 9.049 9.049 0 0 1 3.635-7.247 8.863 8.863 0 0 1 5.229-1.726h2.813a7.915 7.915 0 0 0 5.839-2.578.11.11 0 0 1 .059-.034.112.112 0 0 1 .12.053.113.113 0 0 1 .015.067 7.934 7.934 0 0 1-1.227 3.549.107.107 0 0 0-.014.06.11.11 0 0 0 .073.095.109.109 0 0 0 .062.004 8.505 8.505 0 0 0 5.913-4.876.155.155 0 0 1 .055-.053.15.15 0 0 1 .147 0 .153.153 0 0 1 .054.053A10.779 10.779 0 0 1 23.834 8.1zM8.895 11.628a2.188 2.188 0 1 0 2.188 2.188v-2.042a.158.158 0 0 0-.15-.15z"></path></g></svg>,
            icon2: <svg fill="#666666" width="40px" height="40px" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg" stroke="#666666"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><title>React icon</title><path d="M12 9.861A2.139 2.139 0 1 0 12 14.139 2.139 2.139 0 1 0 12 9.861zM6.008 16.255l-.472-.12C2.018 15.246 0 13.737 0 11.996s2.018-3.25 5.536-4.139l.472-.119.133.468a23.53 23.53 0 0 0 1.363 3.578l.101.213-.101.213a23.307 23.307 0 0 0-1.363 3.578l-.133.467zM5.317 8.95c-2.674.751-4.315 1.9-4.315 3.046 0 1.145 1.641 2.294 4.315 3.046a24.95 24.95 0 0 1 1.182-3.046A24.752 24.752 0 0 1 5.317 8.95zM17.992 16.255l-.133-.469a23.357 23.357 0 0 0-1.364-3.577l-.101-.213.101-.213a23.42 23.42 0 0 0 1.364-3.578l.133-.468.473.119c3.517.889 5.535 2.398 5.535 4.14s-2.018 3.25-5.535 4.139l-.473.12zm-.491-4.259c.48 1.039.877 2.06 1.182 3.046 2.675-.752 4.315-1.901 4.315-3.046 0-1.146-1.641-2.294-4.315-3.046a24.788 24.788 0 0 1-1.182 3.046zM5.31 8.945l-.133-.467C4.188 4.992 4.488 2.494 6 1.622c1.483-.856 3.864.155 6.359 2.716l.34.349-.34.349a23.552 23.552 0 0 0-2.422 2.967l-.135.193-.235.02a23.657 23.657 0 0 0-3.785.61l-.472.119zm1.896-6.63c-.268 0-.505.058-.705.173-.994.573-1.17 2.565-.485 5.253a25.122 25.122 0 0 1 3.233-.501 24.847 24.847 0 0 1 2.052-2.544c-1.56-1.519-3.037-2.381-4.095-2.381zM16.795 22.677c-.001 0-.001 0 0 0-1.425 0-3.255-1.073-5.154-3.023l-.34-.349.34-.349a23.53 23.53 0 0 0 2.421-2.968l.135-.193.234-.02a23.63 23.63 0 0 0 3.787-.609l.472-.119.134.468c.987 3.484.688 5.983-.824 6.854a2.38 2.38 0 0 1-1.205.308zm-4.096-3.381c1.56 1.519 3.037 2.381 4.095 2.381h.001c.267 0 .505-.058.704-.173.994-.573 1.171-2.566.485-5.254a25.02 25.02 0 0 1-3.234.501 24.674 24.674 0 0 1-2.051 2.545zM18.69 8.945l-.472-.119a23.479 23.479 0 0 0-3.787-.61l-.234-.02-.135-.193a23.414 23.414 0 0 0-2.421-2.967l-.34-.349.34-.349C14.135 1.778 16.515.767 18 1.622c1.512.872 1.812 3.37.824 6.855l-.134.468zM14.75 7.24c1.142.104 2.227.273 3.234.501.686-2.688.509-4.68-.485-5.253-.988-.571-2.845.304-4.8 2.208A24.849 24.849 0 0 1 14.75 7.24zM7.206 22.677A2.38 2.38 0 0 1 6 22.369c-1.512-.871-1.812-3.369-.823-6.854l.132-.468.472.119c1.155.291 2.429.496 3.785.609l.235.02.134.193a23.596 23.596 0 0 0 2.422 2.968l.34.349-.34.349c-1.898 1.95-3.728 3.023-5.151 3.023zm-1.19-6.427c-.686 2.688-.509 4.681.485 5.254.987.563 2.843-.305 4.8-2.208a24.998 24.998 0 0 1-2.052-2.545 24.976 24.976 0 0 1-3.233-.501zM12 16.878c-.823 0-1.669-.036-2.516-.106l-.235-.02-.135-.193a30.388 30.388 0 0 1-1.35-2.122 30.354 30.354 0 0 1-1.166-2.228l-.1-.213.1-.213a30.3 30.3 0 0 1 1.166-2.228c.414-.716.869-1.43 1.35-2.122l.135-.193.235-.02a29.785 29.785 0 0 1 5.033 0l.234.02.134.193a30.006 30.006 0 0 1 2.517 4.35l.101.213-.101.213a29.6 29.6 0 0 1-2.517 4.35l-.134.193-.234.02c-.847.07-1.694.106-2.517.106zm-2.197-1.084c1.48.111 2.914.111 4.395 0a29.006 29.006 0 0 0 2.196-3.798 28.585 28.585 0 0 0-2.197-3.798 29.031 29.031 0 0 0-4.394 0 28.477 28.477 0 0 0-2.197 3.798 29.114 29.114 0 0 0 2.197 3.798z"></path></g></svg>,
            icon3: <img src={mvc_icon_svg} width={50}></img>,
        },
        apps: {
            title: 'Mobile Apps',
            description: 'We create mobile applications for both iOS and Android.',
            icon: <svg xmlns="http://www.w3.org/2000/svg" height="50px" viewBox="0 -960 960 960" width="50px" fill="#666666"><path d="M40-240q9-107 65.5-197T256-580l-74-128q-6-9-3-19t13-15q8-5 18-2t16 12l74 128q86-36 180-36t180 36l74-128q6-9 16-12t18 2q10 5 13 15t-3 19l-74 128q94 53 150.5 143T920-240H40Zm240-110q21 0 35.5-14.5T330-400q0-21-14.5-35.5T280-450q-21 0-35.5 14.5T230-400q0 21 14.5 35.5T280-350Zm400 0q21 0 35.5-14.5T730-400q0-21-14.5-35.5T680-450q-21 0-35.5 14.5T630-400q0 21 14.5 35.5T680-350Z"/></svg>,
            icon2: <svg xmlns="http://www.w3.org/2000/svg" height="50px" viewBox="0 -960 960 960" width="50px" fill="#666666"><path d="M160-600v-80h80v80h-80Zm0 320v-240h80v240h-80Zm280 0h-80q-33 0-56.5-23.5T280-360v-240q0-33 23.5-56.5T360-680h80q33 0 56.5 23.5T520-600v240q0 33-23.5 56.5T440-280Zm-80-80h80v-240h-80v240Zm200 80v-80h160v-80h-80q-33 0-56.5-23.5T560-520v-80q0-33 23.5-56.5T640-680h160v80H640v80h80q33 0 56.5 23.5T800-440v80q0 33-23.5 56.5T720-280H560Z"/></svg>,
            icon3: <img src={java_icon_svg} width={40}></img>,
            icon4: <img src={maui_icon_svg} width={40}></img>
        },
        apis: {
            title: 'APIs',
            description: 'We develop robust APIs for your applications.',
            icon: <img src={mvc_icon_svg} width={50}/>,
            icon2: <img src={swagger_icon_svg} width={40}/>
        },
        databases: {
            title: 'Databases',
            description: 'We design and manage scalable databases.',
            icon: <img src={ssms_icon_svg} width={40}/>,
            icon2: <img src={mongodb_icon_svg} width={40}/>,
            icon3: <img src={sqlite_icon_svg} width={40}/>,
        },
        ux: {
            title: 'UX',
            description: '',
            icon: '🗄️',
        },
        agile: {
            title: 'Agile',
            description: 'We design and manage scalable databases.',
            icon: '🗄️',
        },
        projectmanagement: {
            title: 'Project Management',
            description: 'We design and manage scalable databases.',
            icon: '🗄️',
        },
        processdevelopment: {
            title: 'Process Development',
            description: 'We design and manage scalable databases.',
            icon: '',
        },
    };

    return (
        <header className="App-header-services">
            <div className="service-personalinfo-wrapper">
                <div className="service-personalinfo-container">
                    <div className="service-personalinfo-segment">
                        <div className="service-personalinfo-iconcontainer">
                            <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="40px" fill="#53C0C0"><path d="M479.33-120 192.67-276.67v-240L40-600l439.33-240L920-600v318h-66.67v-280L766-516.67v240L479.33-120Zm0-316 301.34-164-301.34-162-300 162 300 164Zm0 240.33 220-120.66v-162.34L479.33-360l-220-120v163.67l220 120.66ZM480-436Zm-.67 79.33Zm0 0Z"/></svg>
                        </div>
                        <h3>Tekniskt inriktad</h3>
                        <p>Med över 10 år sedan jag programmerade mitt första program och 6 års arbetserfarenhet inom IT-branschen så valde jag 2021 att studera till Systemutvecklare på Högskolan Väst.</p>
                    </div>
                    <div className="service-personalinfo-segment">                        
                        <div className="service-personalinfo-iconcontainer">
                            <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#8080FF"><path d="m320-241.33-240-240 241.33-241.34L369-675 175-481l192.33 192.33L320-241.33ZM638.67-240 591-287.67l194-194L592.67-674 640-721.33l240 240L638.67-240Z"/></svg>
                        </div>
                        <h3>Kompetenser</h3>
                        <p>Webbutveckling: .NET Blazor, React.js, .NET MVC, PHP.</p>
                        <p>Apputveckling: Android Java, .NET MAUI.</p>
                        <p>API:er: .NET MVC, Swagger.</p>
                        <p>Databaser: SQL Server Management Studio, MongoDB och SQLite.</p>
                    </div>
                    <div className="service-personalinfo-segment">
                        <div className="service-personalinfo-iconcontainer">
                            <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#53C0C0"><path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z"/></svg>
                        </div>
                        <h3>Personlighet</h3>
                        <p>Jag drivs av att lösa problem, och lära mig nya saker. Från arbetserfarenhet så är jag service-minded, och arbetar bra både självgående och i lag, när rätt förutsättningar ges. För mig är kommunikation och tydlighet av högsta vikt på arbetsplatsen. </p>
                    </div>
                </div>
            </div>
            <div className="service-main-div">
                <div className="service-div" data-detail="Websites" onMouseOver={(e) => handleMouseOver(e, serviceDetails.websites)} onMouseOut={() => handleMouseOut(serviceDetails.websites)}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#666666"><path d="M480-80q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-155.5t86-127Q252-817 325-848.5T480-880q83 0 155.5 31.5t127 86q54.5 54.5 86 127T880-480q0 82-31.5 155t-86 127.5q-54.5 54.5-127 86T480-80Zm0-82q26-36 45-75t31-83H404q12 44 31 83t45 75Zm-104-16q-18-33-31.5-68.5T322-320H204q29 50 72.5 87t99.5 55Zm208 0q56-18 99.5-55t72.5-87H638q-9 38-22.5 73.5T584-178ZM170-400h136q-3-20-4.5-39.5T300-480q0-21 1.5-40.5T306-560H170q-5 20-7.5 39.5T160-480q0 21 2.5 40.5T170-400Zm216 0h188q3-20 4.5-39.5T580-480q0-21-1.5-40.5T574-560H386q-3 20-4.5 39.5T380-480q0 21 1.5 40.5T386-400Zm268 0h136q5-20 7.5-39.5T800-480q0-21-2.5-40.5T790-560H654q3 20 4.5 39.5T660-480q0 21-1.5 40.5T654-400Zm-16-240h118q-29-50-72.5-87T584-782q18 33 31.5 68.5T638-640Zm-234 0h152q-12-44-31-83t-45-75q-26 36-45 75t-31 83Zm-200 0h118q9-38 22.5-73.5T376-782q-56 18-99.5 55T204-640Z"/></svg>
                    <p className='service-text'>Webbutveckling</p>
                </div>
                <div className="service-div" data-detail="Mobile Apps" onMouseOver={(e) => handleMouseOver(e, serviceDetails.apps)} onMouseOut={() => handleMouseOut(serviceDetails.apps)}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#666666"><path d="M666-440 440-666l226-226 226 226-226 226Zm-546-80v-320h320v320H120Zm400 400v-320h320v320H520Zm-400 0v-320h320v320H120Zm80-480h160v-160H200v160Zm467 48 113-113-113-113-113 113 113 113Zm-67 352h160v-160H600v160Zm-400 0h160v-160H200v160Zm160-400Zm194-65ZM360-360Zm240 0Z"/></svg>
                    <p className='service-text'>Apputveckling</p>
                </div>
                <div className="service-div" data-detail="APIs" onMouseOver={(e) => handleMouseOver(e, serviceDetails.apis)} onMouseOut={() => handleMouseOut(serviceDetails.apis)}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#666666"><path d="m480-400-80-80 80-80 80 80-80 80Zm-85-235L295-735l185-185 185 185-100 100-85-85-85 85ZM225-295 40-480l185-185 100 100-85 85 85 85-100 100Zm510 0L635-395l85-85-85-85 100-100 185 185-185 185ZM480-40 295-225l100-100 85 85 85-85 100 100L480-40Z"/></svg>
                    <p className="service-text">API-utveckling</p>
                </div>
                <div className="service-div" data-detail="Databases" onMouseOver={(e) => handleMouseOver(e, serviceDetails.databases)} onMouseOut={() => handleMouseOut(serviceDetails.databases)}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#666666"><path d="M480-120q-151 0-255.5-46.5T120-280v-400q0-66 105.5-113T480-840q149 0 254.5 47T840-680v400q0 67-104.5 113.5T480-120Zm0-479q89 0 179-25.5T760-679q-11-29-100.5-55T480-760q-91 0-178.5 25.5T200-679q14 30 101.5 55T480-599Zm0 199q42 0 81-4t74.5-11.5q35.5-7.5 67-18.5t57.5-25v-120q-26 14-57.5 25t-67 18.5Q600-528 561-524t-81 4q-42 0-82-4t-75.5-11.5Q287-543 256-554t-56-25v120q25 14 56 25t66.5 18.5Q358-408 398-404t82 4Zm0 200q46 0 93.5-7t87.5-18.5q40-11.5 67-26t32-29.5v-98q-26 14-57.5 25t-67 18.5Q600-328 561-324t-81 4q-42 0-82-4t-75.5-11.5Q287-343 256-354t-56-25v99q5 15 31.5 29t66.5 25.5q40 11.5 88 18.5t94 7Z"/></svg>
                    <p className="service-text">Databasutveckling</p>
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
                        {detailData.icon}
                        {detailData.icon2}
                        {detailData.icon3}
                        {detailData.icon4}
            </div>
        </header>
    );
  }
  
  export default Services;