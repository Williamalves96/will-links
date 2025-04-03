import "./App.css";
import { DiGithubAlt } from "react-icons/di";
import { CgHeart } from "react-icons/cg";
import Linkedin from "./components/Linkedin";
function App() {
  return (
    <div className="container-app">
      <h1>
        {" "}
        links do meu <CgHeart />
      </h1>
      <a
        href="https://github.com/Williamalves96"
        className="links"
        target="_blank"
      >
        {" "}
        <DiGithubAlt />
        Git Hub
      </a>
    
      
 <Linkedin />
    
    </div>
  );
}

export default App;
