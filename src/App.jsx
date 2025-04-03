import "./App.css";
import { DiGithubAlt } from "react-icons/di";
function App() {
  return (
    <div className="container-app">
      <h1> links do meu s2</h1>
      <a
        href="https://github.com/Williamalves96"
        className="links"
        target="_blank"
      >
        {" "}
        <DiGithubAlt />
        Git Hub
      </a>
    </div>
  );
}

export default App;
