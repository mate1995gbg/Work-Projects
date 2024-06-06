import '../App.css';
import logo from '../svg/logo.svg';
function Home() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Webster Systems Development</p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
          </a>
            <svg width="120" height="100" viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg" className='svg-triangles'>
            <g id="triangles" clip-path="url(#clip0_1_2)">
            <g id="lightGroup">
            <path id="light1" opacity="0.7" d="M40 54.268C41.3333 55.0378 41.3333 56.9623 40 57.7321L5.5 77.6506C4.16666 78.4204 2.5 77.4582 2.5 75.9186L2.5 36.0814C2.5 34.5418 4.16667 33.5796 5.5 34.3494L40 54.268Z"/>
            </g>
            <g id="darkGroup">
            <path id="dark2" opacity="0.7" d="M40 54.268C41.3333 55.0378 41.3333 56.9623 40 57.7321L5.5 77.6506C4.16666 78.4204 2.5 77.4582 2.5 75.9186L2.5 36.0814C2.5 34.5418 4.16667 33.5796 5.5 34.3494L40 54.268Z"/>
            <path id="dark1" opacity="0.7" d="M55 54.268C56.3333 55.0378 56.3333 56.9623 55 57.7321L20.5 77.6506C19.1667 78.4204 17.5 77.4582 17.5 75.9186L17.5 36.0814C17.5 34.5418 19.1667 33.5796 20.5 34.3494L55 54.268Z"/>
            </g>
            </g>
            <defs>
            <clipPath id="clip0_1_2">
            <rect width="120" height="100" fill="white"/>
            </clipPath>
            </defs>
            </svg>
        </header>
      </div>
    );
  }
  
  export default Home;