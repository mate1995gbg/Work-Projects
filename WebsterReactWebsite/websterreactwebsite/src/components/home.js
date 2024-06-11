import '../App.css';
import logo from '../svg/logo.svg';
function Home() {
    return (
      <div className="App">
        <header className="App-header-home"> 
          <div className="home-welcome-container">
            <p className='home-intro-text'>Hejsan! <br></br><br></br>Mitt namn är <span className="highlight-cyan">Marco Terán</span>, <br></br>en <span className="highlight-magenta">Systemutvecklare</span><br></br>
             baserad in Göteborg .</p>
            <p className="home-intro-emailtext"><br></br>Kontakta mig via:</p>
            <div className="home-email-container">
              <span class="material-symbols-outlined">send
              </span>
              <p className="home-intro-emailtext">marcogbg@hotmail.com</p>
            </div>
          </div>
            <img src={logo} className="App-logo"/>
        </header>
        <div className='App-header-home-lowerpart'>
          <svg width="150" height="180" viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg" className='svg-triangles'>
            <g id="triangles" clip-path="url(#clip0_1_2)">
            <g id="lightGroup">
            <path id="light1" opacity="0.7" d="M52.5981 38.5C51.4434 40.5 48.5566 40.5 47.4019 38.5L29.2154 7C28.0607 5 29.5041 2.5 31.8135 2.5L68.1865 2.5C70.4959 2.5 71.9393 5 70.7846 7L52.5981 38.5Z"/>
            </g>
            <g id="darkGroup">
            <path id="dark2" opacity="0.7" d="M52.5981 38.5C51.4434 40.5 48.5566 40.5 47.4019 38.5L29.2154 7C28.0607 5 29.5041 2.5 31.8135 2.5L68.1865 2.5C70.4959 2.5 71.9393 5 70.7846 7L52.5981 38.5Z"/>
            <path id="dark1" opacity="0.7" d="M52.5981 53.5C51.4434 55.5 48.5566 55.5 47.4019 53.5L29.2154 22C28.0607 20 29.5041 17.5 31.8135 17.5L68.1865 17.5C70.4959 17.5 71.9393 20 70.7846 22L52.5981 53.5Z"/>
            </g>
            </g>
            <defs>
            <clipPath id="clip0_1_2">
            <rect width="120" height="100" fill="white" transform="matrix(0 1 -1 0 100 0)"/>
            </clipPath>
            </defs>
          </svg>
        </div>
      </div>
    );
  }
  
  export default Home;