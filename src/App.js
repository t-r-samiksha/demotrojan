
import './App.css';
import About from './Components/About/About';
import Background from './Components/Background/Background';
import Contact from './Components/Contact/Contact';
import Events from './Components/Events/Events';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';


function App() {
  return (
    <div className="App">
      <Background/>
      <Navbar/>
      <Home/>
      <Events/>
      <About/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
