import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Admin from "./pages/admin/index";
import Login from "./pages/login/index";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Router>
        <Switch>
          <Route pathName="/login" component={Login}></Route>
          <Route pathName="/admin" component={Admin}></Route>
        </Switch>
      </Router>
    );
  }
}
export default App;
