import "./global/config"
import React from "react"
import ReactDOM from "react-dom"
import reportWebVitals from "./reportWebVitals"
import {HashRouter as Router, Route, Switch} from "react-router-dom"
import {RecoilRoot} from "recoil"
import {SubCurrentUser} from "./hooks/use-current-user"

import Root from "./pages/root"
import About from "./pages/about"
import Settings from "./pages/settings"
import Stars from "./pages/stars"
import Account from "./pages/account"
import AccountContract from "./pages/account/contract"
import Transaction from "./pages/tx"
import Events from "./pages/events"
import Wip from "./pages/wip"

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <SubCurrentUser />
      <Router>
        <Switch>
          <Route exact path="/events/:event" component={Events} />
          <Route exact path="/tx/:tx" component={Transaction} />
          <Route
            exact
            path="/account/:address/:contract"
            component={AccountContract}
          />
          <Route exact path="/account/:address" component={Account} />
          <Route exact path="/stars" component={Stars} />
          <Route exact path="/settings" component={Settings} />
          <Route exact path="/about" component={About} />
          <Route exact path="/" component={Root} />
          <Route exact path="/wip" component={Wip} />
        </Switch>
      </Router>
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById("root")
)

reportWebVitals()
