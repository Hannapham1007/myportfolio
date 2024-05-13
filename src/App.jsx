import "./App.css";
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
      <Footer/>
    </div>
  );
}

export default App;
