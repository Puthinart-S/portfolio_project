import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Profile from './Pages/Profile';
import MyProject from './Pages/MyProject';
import NoMatch from './Pages/NoMatch';
import NaviBar from './Components/navbar/NaviBar';
import Sidebar from './Components/side_bar/Sidebar';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  };
  render() {
    const toggle = () => {
      this.setState({isOpen: !this.state.isOpen})
    };
    return (
      <React.Fragment>
          <Router>
            <Sidebar isOpen={this.state.isOpen} toggle={toggle}/>
            <NaviBar toggle={toggle}/>
            <Switch>
              <Route exact path="/" component={Profile} />
              <Route path="/MyProject" component={MyProject} />
              <Route component={NoMatch} />
            </Switch>
          </Router>
      </React.Fragment>
    );
  };
};

export default App;
