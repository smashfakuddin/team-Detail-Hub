import './App.css';
import Header from './Components/Header/Header';
import TeamCard from './Components/TeamCard/TeamCard';
import TeamDetail from './Components/TeamDetail/TeamDetail'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  return (
    <div> 
          
      <Router>
      <Header></Header>
      <Switch>
          <Route exact path="/">
          <TeamCard></TeamCard>
          </Route>
          <Route path='/team/:idTeam'>
            <TeamDetail></TeamDetail>
                
          </Route>
          
          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
