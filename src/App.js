import "./App.css";
import Cards from "./components/cards";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fab);

function App() {
  return (
    <div className="App bg-dark">
      <Cards />
    </div>
  );
}

export default App;
