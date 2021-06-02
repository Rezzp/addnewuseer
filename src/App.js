import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AddUser } from "./components/AddUser";
import { EditUser } from "./components/EditUser";
import { Home } from "./components/Home";

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (

    <Router>
      <div style={{
        maxWidth: "40%",
        margin: "80px auto",
        padding: "20px"
      }}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/add" component={AddUser} />
          <Route path="/edit:id" component={EditUser} />
        </Switch>
      </div>
    </Router>


  );
}

export default App;
