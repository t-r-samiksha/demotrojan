

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
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Events_page from './Pages/Events_page/Events_page';
import SponcerPage from './Pages/Sponser_page/SponcerPage';


function App() {
  return (
    
<Router>
      <div className="App">
        {/* Routing Setup */}
        <Routes>
          <Route
            path="/events-page"
            element={
              <>
              <Navbar />
                <Events_page />
              </>
            }
          />
          <Route
            path="/sponser-page"
            element={
              <>
              <Navbar />
                <SponcerPage />
              </>
            }
          />
          <Route
            path="/"
            element={
              <>
                <Background />
                <Navbar />
                <Home />
                <Countdown />
                <ThreeDCardDemo />
                <About />
                <Contact />
                <Footer />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
   
  );
}

export default App;
