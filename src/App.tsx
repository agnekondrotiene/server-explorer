import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ServersPage from "./pages/ServersPage";
import LoginPage from "./pages/LoginPage";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={LoginPage} />
        <Route path="/servers" component={ServersPage} />
      </Switch>
    </Router>
  );
};

export default App;
