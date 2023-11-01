import { BrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import { AboutMe } from "./pages/about";
import {Service} from "./pages/service"

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Home />
      {/* <AboutMe /> */}
      <Service/>
    </BrowserRouter>
  );
}

export default App;
