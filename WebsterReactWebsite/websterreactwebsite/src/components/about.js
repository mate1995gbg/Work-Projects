import '../App.css';

const marcoTeranImage = "https://i.imgur.com/tDH6Vjy.jpeg";
const omarMuminovicImage = "https://i.imgur.com/Jq8ZGnj.jpeg";


function About() {
    return (
            <header className="App-header">
            <h2 className="introbody-text">About Us</h2>
            
            <section className="mission">
                <h2 className="section-title">Our Mission</h2>
                <p>To innovate and lead in our industry, ensuring the highest levels of customer satisfaction and contributing to a sustainable future.</p>
            </section>

            <div className="about-us">
                <div className="member">
                    <img src={marcoTeranImage} className="profile-pic" alt="Marco Teran" />
                    <h2>Marco Teran</h2>
                    <p>Software Engineer</p>
                    <p>Marco is a seasoned software engineer with over 10 years of experience in full-stack development...</p>
                </div>
                <div className="member">
                    <img src={omarMuminovicImage} className="profile-pic" alt="Omar Muminovic" />
                    <h2>Omar Muminovic</h2>
                    <p>Product Manager</p>
                    <p>Omar has been leading product teams for 8 years, specializing in agile methodologies and user experience...</p>
                </div>
            </div>

            <section className="testimonials">
                <h2 className="section-title">What Our Clients Say</h2>
                <p>"This team exceeded our expectations and delivered outstanding results!" - Happy Client</p>
                <p>"Professional, reliable, and innovative. Highly recommend." - Satisfied Customer</p>
            </section>

            <section className="contact">
                <h2 className="section-title">Contact Us</h2>
                <p>We would love to hear from you! Reach out to us at <a href="hello@websterdevelopment.se">hello@websterdevelopment.se</a> or follow us on social media.</p>
            </section>
            </header>
     );
  }
  
  export default About;