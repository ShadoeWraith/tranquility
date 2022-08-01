import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import CharInfo from "./components/CharInfo";
import Members from "./pages/Members";
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
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
