import '../App.css';
function About() {
    return (
        <header className="App-header">
            <h2 className="introbody-text">About Us</h2>
            <div className="about-us">
            <div className="member">
                <img src="https://media.licdn.com/dms/image/D4E35AQFEWDad5c_mzw/profile-framedphoto-shrink_200_200/0/1711885152021?e=1718377200&v=beta&t=8HL8l1d5RQ8PwJEjVqsjhFbHzp6RKX5czpbNGSYt0LU" className="profile-pic" />
                <h2>Marco Teran</h2>
                <p>Software Engineer</p>
                <p>John is a seasoned software engineer with over 10 years of experience in full-stack development...</p>
            </div>
            <div className="member">
                <img src="https://media.licdn.com/dms/image/D4D03AQFd9VQULF1XFw/profile-displayphoto-shrink_200_200/0/1717666526315?e=1723075200&v=beta&t=YrNmQY-OYfDDhRomQ7wP8jcKwaJtPqd_BXHxp3essBU" className="profile-pic" />
                <h2>Omar Muminovic</h2>
                <p>Product Manager</p>
                <p>Jane has been leading product teams for 8 years, specializing in agile methodologies and user experience...</p>
            </div>
            </div>
        </header>
    );
  }
  
  export default About;