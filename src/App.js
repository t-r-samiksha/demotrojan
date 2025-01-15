
import './App.css';
import About from './Components/About/About';
import Background from './Components/Background/Background';
import Contact from './Components/Contact/Contact';
import Countdown from './Components/CountDown/countdown';
import Events from './Components/Events/Events';
import { ThreeDCardDemo } from './Components/Events/ThreeDCardDemo';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';


function App() {
  return (
    <div className="App">
      <Background/>
      <Navbar/>
      <Home/>
      <Countdown/>
      <ThreeDCardDemo/>
      <About/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
