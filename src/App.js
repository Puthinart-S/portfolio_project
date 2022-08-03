import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Profile from './Components/my_profile/MyProfile';
import MyProject from './Components/my_project/MyPro';
import NoMatch from './Pages/NoMatch';
import NaviBar from './Components/navbar/NaviBar';
import Sidebar from './Components/side_bar/Sidebar';
import {AnimatePresence} from 'framer-motion/dist/framer-motion';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  };

  render() {

    const toggle = () => {
      this.setState({isOpen: !this.state.isOpen});
    };

    return (
      <>
          <Router>
            <Sidebar isOpen={this.state.isOpen} toggle={toggle}/>
            <NaviBar toggle={toggle}/>
            <Route 
            render={({location}) => (
              <AnimatePresence exitBeforeEnter>
              <Switch location={location} key={location.pathname}>
                <Route exact path="/" component={Profile} />
                <Route exact path="/MyProject" component={MyProject} />
                <Route component={NoMatch} />
              </Switch>
              </AnimatePresence>
              )} 
            />
          </Router>
      </>
    );

  };

};

export default App;
