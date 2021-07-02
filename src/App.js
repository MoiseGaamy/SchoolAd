import './App.css';
import Navb from './components/Navb';
import {
  Switch,
  Route,
} from "react-router-dom";

import Home from './components/Home';
import Blog from './components/Blog';
import Service from './components/Service';
import Contact from './components/Contact';
import Lang from './components/Lang';
import Info from './components/Info';
import Univ from './components/Univ';

function App() {
  return (
    <div>
      <Navb />
      <Switch>
                <Route path="/" exact>
                    <Home />
                    </Route>
                    <Route path="/blog">
                        <Blog />
                    </Route>
                    <Route path="/service">
                        <Service />
                    </Route>
                    <Route path="/contact">
                        <Contact />
                    </Route>
                    <Route path="/langue">
                        <Lang />
                    </Route>
                    <Route path="/info">
                        <Info />
                    </Route>
                    <Route path="/univ">
                        <Univ />
                    </Route>
             </Switch> 
                </div>
  );
}

export default App;
