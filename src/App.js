import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Game from './components/game/Game';
import Home from './components/Home';
import Instructions from './components/Instructions';
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/game/:difficulty">
            <Game />
          </Route>
          <Route exact path="/instructions">
            <Instructions />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
