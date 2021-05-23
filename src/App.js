import './App.scss';
import '@fortawesome/fontawesome-free/css/all.min.css'

import {
  MemoryRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import MainMenu from "./screens/MainMenu";
import MainGame from "./screens/MainGame";

import SoundManagerComponent from "./sound/SoundManagerComponent";

function App() {
  return (
    <div className="App">
      <Router>
          <Switch>
            <Route path="/singlePlayerGame" >
              <MainGame />
            </Route>
            <Route path="/" >
              <MainMenu />
            </Route>
          </Switch>
      </Router>
      <SoundManagerComponent />
      <div style={{position : 'fixed', bottom: 0, right: 0}}>
        <p style={{backgroundColor: 'white', margin: 0}}>
          {process.env.REACT_APP_ENVIRONMENT_NAME}
        </p>
      </div>
    </div>
  );
}

export default App;
