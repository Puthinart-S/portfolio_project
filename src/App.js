import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Profile } from './Profile';
import { MyProject } from './MyProject';
import { NoMatch } from './NoMatch';
import { Layout } from './Components/Layout';
import { NaviBar } from './Components/NaviBar';


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NaviBar/>
        <Layout>
          <Router>
            <Switch>
              <Route exact path="/" component={Profile} />
              <Route path="/MyProject" component={MyProject} />
              <Route component={NoMatch} />
            </Switch>
          </Router>
        </Layout>
      </React.Fragment>
    );
  }
}

export default App;
