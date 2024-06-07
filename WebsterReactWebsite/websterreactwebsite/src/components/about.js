import '../App.css';

const marcoTeranImage = "https://i.imgur.com/tDH6Vjy.jpeg";
const omarMuminovicImage = "https://i.imgur.com/Jq8ZGnj.jpeg";


function About() {
    return (
        <header className="App-header">
            <h2 className="introbody-text">About Us</h2>
            <div className="about-us">
            <div className="member">
                <img src={marcoTeranImage} className="profile-pic" />
                <h2>Marco Teran</h2>
                <p>Software Engineer</p>
                <p>Marco is a seasoned software engineer with over 10 years of experience in full-stack development...</p>
            </div>
            <div className="member">
                <img src={omarMuminovicImage}  className="profile-pic" />
                <h2>Omar Muminovic</h2>
                <p>Product Manager</p>
                <p>Jane has been leading product teams for 8 years, specializing in agile methodologies and user experience...</p>
            </div>
    </div>
	
        </header>
    );
  }
  
  export default About;