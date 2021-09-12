import './App.css';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects'

function App() {

  return (
    <div>
        <NavBar />
        <Home />
        <About />
        <Projects />
    </div>
  );
}

export default App;
