import './App.css';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects'

function App() {

  return (
    <>
      <NavBar />
        <Home />
        <About />
        <Projects />
        <Contact />
    </>
  );
}

export default App;
