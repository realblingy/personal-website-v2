import { useRef } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import { Element } from 'react-scroll';
import Contact from './pages/Contact';

function App() {

  return (
    <>
      <NavBar />
      {/* <Switch> */}
        <Home />
        <About />
        <Projects />
        <Contact />
        {/* <Home/>        */}
      {/* </Switch> */}
    </>
  );
}

export default App;
