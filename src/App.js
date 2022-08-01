import Navbar from "./components/Navbar";
import Home from "./components/Home";
import CharInfo from "./components/CharInfo";
import Members from "./components/Members";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import { HashRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/tranquility/home"
          element={
            <div>
              <Home />
              <CharInfo />
              <Contact />
            </div>
          }
        />
        <Route path="/tranquility/members" element={<Members />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
