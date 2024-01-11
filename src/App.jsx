import About from "./components/pages/about/About";
import Music from "./components/pages/music/Music";
import Events from "./components/pages/events/Events";
import Contact from "./components/pages/contact/Contact";

import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";

function App() {

  return (
    <div>
      <main>
        <Routes>
          <Route  path="/" element={<About></About>}></Route>
          {/* <Route  path="/quetto1/VanillaWebsite" element={<About></About>}></Route> */}
          {/* Extra linijka na homepage po zahostowaniu */}
          <Route  path="/music" element={<Music></Music>}></Route>
          <Route  path="/events" element={<Events></Events>}></Route>
          <Route  path="/contact" element={<Contact></Contact>}></Route>
        </Routes>
      </main>
    </div>
  )
}

export default App
