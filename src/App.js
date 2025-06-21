import "./App.css";
import { NavBar } from "./components/header/NavBar";
import { Banner } from "./components/content/banner";
import { Projects } from "./components/content/project/Projects";
import { Contact } from "./components/content/contact";
import { Footer } from "./components/footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import Skills from "./components/content/skills/index";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />

      <Contact />
      <Footer />
    </div>
  );
}

export default App;
