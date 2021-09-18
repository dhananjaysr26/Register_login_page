import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './App.css';
import Header from './Components/Header';
import Login from './Components/Login';
import Register from './Components/Register';
import UserList from './Components/UserList';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/user-list" component={UserList} />
      </Switch>
    </Router>
  );
}

export default App;
