import Home from "./pages/Home";
import Members from "./pages/Members";
import Events from "./pages/Events";

import Navbar from "./components/Navbar";
import CharInfo from "./components/CharInfo";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import { HashRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Home />
              <CharInfo />
              <Contact />
            </div>
          }
        />
        <Route path="/members" element={<Members />} />
        <Route path="/events" element={<Events />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
