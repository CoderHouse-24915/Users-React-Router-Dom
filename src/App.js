import "./App.css";
// REACT ROUTER DOM
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// PAGERS
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import CharacterDetail from "./pages/CharacterDetail/CharacterDetail";

// COMPONENTS
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Contact />} />
          <Route path="/contact" element={<About />} />
          <Route path="/detail/:id" element={<CharacterDetail />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
