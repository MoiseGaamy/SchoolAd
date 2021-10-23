import './App.css';
import {BrowserRouter , Route} from "react-router-dom";
import Home from "./pages/Home"
 import Blog from "./pages/Blog"
 import Service from "./pages/Service"
 import Contact from "./pages/Contact"
 import Lang from "./pages/Lang"
 import Info from "./pages/Info"
 import Univ from "./pages/Univ"
 import Footer from "./pages/Footer"

function App() {
  return (
      <BrowserRouter>
          <main>
                <Route path="/" exact component={Home} />
                <Route path="/blog" component={Blog}/>
                <Route path="/service" component={Service}/>
                <Route path="/contact" component={Contact} />
                <Route path="/lang" component={Lang}/>
                <Route path="/info" component={Info}/>
                <Route path="/univ" component={Univ}/>
         </main>
          <footer>
              <Footer />
          </footer>
        </BrowserRouter>
  );
}

export default App;
