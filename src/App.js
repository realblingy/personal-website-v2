import './App.css';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import { Element } from 'react-scroll';

function App() {

  return (
    <Element name="Projects">
      <NavBar/>
      {/* <Switch> */}
        <Home />
        <About />
        <Projects />
        {/* <Home/>        */}
      {/* </Switch> */}
    </Element>
  );
}

export default App;
