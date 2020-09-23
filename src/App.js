import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { withNamespaces } from "react-i18next";

import { CSSTransition, TransitionGroup } from "react-transition-group";

import Homepage from "./Components/Homepage";
import Navigation from "./Components/Navigation";
import Bio from "./Components/About";
import Publications from "./Components/Publications";
import Experiences from "./Components/Experiences";
import StaticContent from "./Components/Static";

import "./App.scss";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locale: this.props.i18n.language,
    };
    this.changeLanguage = this.changeLanguage.bind(this);
  }

  async componentDidMount() {
    this.setState({ ...this.state });
    var img = new Image();
    img.onload = function () {
      document.getElementById("App").classList.add("loaded");
    };
    img.src = "/assets/map.svg";
  }

  changeLanguage(lng) {
    const path = window.location.pathname.split("/");
    path[1] = lng;
    window.location.pathname = path.join("/");
  }

  render() {
    const { t } = this.props;
    return (
      <div id="App">
        <Navigation
          location={this.props.location}
          changeLanguage={this.changeLanguage}
          t={t}
        />

        <main>
          <TransitionGroup>
            <CSSTransition
              appear={true}
              key={this.props.location.key}
              timeout={1000}
              classNames={"fade"}
            >
              <Switch location={this.props.location}>
                <Route exact path="/" render={(props) => <Homepage t={t} />} />
                <Route path="/bio" render={(props) => <Bio t={t} />} />
                <Route
                  path="/experiences"
                  render={(props) => <Experiences t={t} />}
                />
                <Route
                  path="/publications"
                  render={(props) => <Publications t={t} />}
                />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        </main>

        <StaticContent t={t} />
      </div>
    );
  }
}

export default App;
withRouter(withNamespaces()(App));
