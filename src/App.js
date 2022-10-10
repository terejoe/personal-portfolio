import Navbar from "./components/navbar";
import Home from "./components/home";
import About from "./components/about";
import Project from "./components/project";
import Contact from "./components/contact";


function App() {
  return (
    <div>
      <Navbar/>
      <Home />
      <About/>
      <Project/>
      <Contact/>
    </div>
  );
}

export default App;
