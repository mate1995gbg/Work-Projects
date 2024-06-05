import './App.css';
import Navbar from './components/navbar';
import Services from './components/services'
import About from './components/about'
import Contact from './components/contact'
import PreviousWork from './components/previouswork'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './components/home';

function App() {
  return (
    <BrowserRouter>
        <Navbar/>
        <main>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="services" element={<Services />} />
            <Route path="home" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="previouswork" element={<PreviousWork />} />
          </Routes>
        </main>
    </BrowserRouter>
  );
}

export default App;
