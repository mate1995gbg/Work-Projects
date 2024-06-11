import '../App.css';

const marcoTeranImage = "https://i.imgur.com/tDH6Vjy.jpeg";
const omarMuminovicImage = "https://i.imgur.com/Jq8ZGnj.jpeg";


function About() {
    return (
        <header className="App-header">
            <div className="service-header">
                <p className="service-header-text">About</p>
            </div>
            <div className="about-us">
            <div className="member">
                <img src={marcoTeranImage} className="profile-pic" />
                <p>Marco Terán</p>
                <p>Systems Developer</p>
                <p>BSc in Informatics, University West</p>
                <p>I'm a seasoned developer with 4 years <br></br>of experience in both full-stack development.</p>
            </div>
    </div>
	
        </header>
    );
  }
  
  export default About;