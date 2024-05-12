import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from "./screens/home"
import Contact from "./screens/contact"
import Experience from "./screens/experience"
import Project from "./screens/projects"
import Skills from "./screens/skills"
import "./App.css"


function App() {
  return (
    <Router>
      <div><Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route exact path="/contact" element={<Contact/>}></Route>
        <Route exact path="/experience" element={<Experience/>}></Route>
        <Route exact path="/project" element={<Project/>}></Route>
        <Route exact path="/skill" element={<Skills/>}></Route>
      </Routes></div>
    </Router>
  );
}

export default App;