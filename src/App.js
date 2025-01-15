import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import About from "./Components/About/About";
import Background from "./Components/Background/Background";
import Contact from "./Components/Contact/Contact";
import Countdown from "./Components/CountDown/countdown";
//import Events from "./Components/Events/Events";
import { ThreeDCardDemo } from "./Components/Events/ThreeDCardDemo";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import EventsPage from "./Pages/event_page/Events_page";
import SponserPage from "./Pages/sponser_page/SponcerPage";
import SignInPage from './Pages/login_page/SignupFormDemo'


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
              <EventsPage />
              </>
            }
          />
          <Route
            path="/sponser-page"
            element={
              <>
              <Navbar />
              <SponserPage />
              </>
            }
          />
           <Route
            path="/login-page"
            element={
              <>
              {/* <Navbar /> */}
              <SignInPage />
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
