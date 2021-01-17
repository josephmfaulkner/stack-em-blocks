import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css'

import {
  MemoryRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import MainMenu from "./screens/MainMenu";
import MainGame from "./screens/MainGame";

import SoundManagerComponent from "./sound/SoundManagerComponent";

function App() {
  return (
    <div className="App">
      <Router>
          <Switch>
            <Route path="/singlePlayerGame">
              <MainGame />
            </Route>
            <Route path="/">
              <MainMenu />
            </Route>
          </Switch>
      </Router>
      <SoundManagerComponent />
    </div>
  );
}

export default App;
