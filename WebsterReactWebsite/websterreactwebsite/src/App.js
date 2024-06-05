import './App.css';
import logo from '../src/svg/logo.svg';
import Navbar from './components/navbar';
import Services from './components/services'
import About from './components/about'
import Contact from './components/contact'
import PreviousWork from './components/previouswork'
import Home from './components/home';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <section id="home">
          <Home />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="contact">
          <Contact />
        </section>
        <section id="previouswork">
          <PreviousWork />
        </section>
      </main>
    </div>
  );
}

export default App;
