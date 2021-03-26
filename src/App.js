import { HashRouter as Router, Redirect, Route } from "react-router-dom";
import Detail from "./Routes/Detail";
import Home from "./Routes/Home";
const App = () => {
  // Props and states
  return (
    // UI Components
    <Router>
      <Route exact path="/" component={Home} />
      <Route path="/:id" component={Detail} />
      <Redirect from="*" to="/" />
    </Router>
  );
};

export default App;
