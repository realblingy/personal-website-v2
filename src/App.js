import './App.css';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects'
import Footer from './components/Footer';

function App() {

  return (
    <div>
        <NavBar />
        <Home />
        <About />
        <Projects />
        <Footer />
    </div>
  );
}

export default App;
