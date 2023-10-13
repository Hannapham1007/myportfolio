import "./App.css";
import About from "./Component/About";
import Contact from "./Component/Contact";
import Footer from "./Component/Footer";
import Home from "./Component/Home";
import Navbar from "./Component/Navbar";
import Project from "./Component/Project";

function App() {
  return (
    <div className="app">
      <Navbar/>
      <Home/>
      <About/>
      <Project/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
