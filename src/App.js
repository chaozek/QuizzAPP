import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import { GlobalStyles } from "./GlobalStyles";

import Final from "./pages/Final";
import HomePage from "./pages/HomePage";
import ParticlesBg from "particles-bg";
import Questions from "./pages/Questions";

export default function App() {
  return (
    <Router>
      <GlobalStyles />
      <ParticlesBg color="#3BB6D7" type="cobweb" bg={true} num={100} />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/questions" component={Questions} />
        <Route exact path="/final" component={Final} />
      </Switch>
    </Router>
  );
}
