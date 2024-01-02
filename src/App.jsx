import "./App.css";
import Contact from "./Component/Contact";
import Footer from "./Component/Footer";
import Home from "./Component/Home";
import Project from "./Component/Project";
import Tech from "./Component/Tech";

function App() {
  return (
    <div className="app">
      <Home/>
      <Tech/>
      <Project/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
