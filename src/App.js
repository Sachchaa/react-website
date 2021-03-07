import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import Home from './pages';
import SignIn from './pages/signin';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/signin' component={SignIn} />
      </Switch>
    </Router>
  );
}

export default App;
