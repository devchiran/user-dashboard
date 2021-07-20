import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Userlist from './pages/Userlist'
import Userdetails from './pages/Userdetails'
import './App.css';

function App() {
  return (
    <Router>
      {/* <div className="App">
        <header className="App-header d-block text-center">
          User Dashboard
        </header>
      </div> */}
      <Switch>
        <Route path="/" exact component={ Userlist } />
        <Route path="/users/:id" component={ Userdetails } />
      </Switch>
    </Router>
  );
}

export default App;
