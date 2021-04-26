import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Projects from "./components/Projects/Projects";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App(props) {
  return (
    <>
      <Router>
        <NavBar />
        <Route>
          <Home />
        </Route>

        {/* 
        working
        <Switch>
          <Route>
            <Projects />
          </Route>
          <Route>
            <Skills />
          </Route>
          <Route>
            <About />
          </Route>
          <Route>
            <Contact />
            <Footer />
          </Route>
        </Switch> */}
      </Router>
    </>
  );
}

export default App;
