
import { useContext } from 'react';
import './App.css';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Intro from './components/intro/Intro';
import Plist from './components/p-list/P-list';
import Toggle from './components/toggle/Toggle';
import { ThemeContext } from './Context';

function App() {

  const theme = useContext(ThemeContext);
  const dark_mode = theme.state.dark_mode;

  return (
    <div className="App" style={{
      backgroundColor: dark_mode ? 'rgb(64, 63, 63)': 'white',
      color: dark_mode && 'white',
    }} >  
      <Toggle/>
      <Intro/>
      <About/>
      <Plist/>
      <Contact/>
    </div>
  );
}

export default App;
