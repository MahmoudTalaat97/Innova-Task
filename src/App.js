import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import Login from './Components/JS/login';
import Password from './Components/JS/password';
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect,
} from 'react-router-dom';
import './App.css';
import React, {Fragment, Component} from 'react';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      FirstStep: false
    };
  }

  componentDidUpdate=()=>{
    console.log(this.state)
  }
  redirectToPassword=()=>
  {this.setState({FirstStep: true });}
  render() {
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route
							exact
							path='/login'
							render={(props) => (
								<Fragment>
									{this.state.FirstStep ? (
										<Redirect to='/password' />
									) : (
										<div>
										
											<Login
												redirectToPassword={
													this.redirectToPassword
												}
											/>
										</div>
									)}
								</Fragment>
							)}
						/>
            <Route
							exact
							path='/password'
							render={(props) => (
								<Fragment>
									
										
											<Password
											/>
										
									
								</Fragment>
							)}
						/>
        </Switch>
        </Router>
    </div>
  );
}}

export default App;
