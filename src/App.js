import './App.css';
import Header from './Components/Header/Header';
import TeamCard from './Components/TeamCard/TeamCard';
import TeamDetail from './Components/TeamDetail/TeamDetail'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import NotFound from './Components/NotFound/NotFound';



function App() {
  return (
    <div>

      <Router>
        <Switch>
          <Route exact path="/">
            <Header></Header>
            <TeamCard></TeamCard>
          </Route>
          <Route path='/team/:idTeam'>
            <TeamDetail></TeamDetail>
          </Route>
          <Route path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
