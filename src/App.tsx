import { BrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import { AboutMe } from "./pages/about";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Home />
      <AboutMe />
    </BrowserRouter>
  );
}

export default App;
