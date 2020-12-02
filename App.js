import './App.css';
import Splash from './Component/Splash';
import Osazie from './Component/Osazie'
import Emma from './Component/Emma'
import Yusuf from './Component/Yusuf'
import Ola from './Component/Ola'

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Splash} />
        <Route path="/osazie" exact component={Osazie} />
        <Route path="/emma" exact component={Emma} />
        <Route path="/yusuf" exact component={Yusuf} />
        <Route path="/ola" exact component={Ola} />
      </Switch>
    </Router>
  );
}

export default App;
